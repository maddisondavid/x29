#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline/promises");
const { stdin, stdout } = require("process");

const repoRoot = path.resolve(__dirname, "..");
const templateRoot = path.join(repoRoot, "templates");
const stageLayout = [
  {
    templateDir: "define",
    targetDir: "01-define",
    extraDirs: ["context"]
  },
  {
    templateDir: "design",
    targetDir: "02-design",
    extraDirs: ["notebook"]
  },
  {
    templateDir: "map",
    targetDir: "03-map",
    extraDirs: ["notebook"]
  },
  {
    templateDir: "plan",
    targetDir: "04-plan",
    extraDirs: []
  },
  {
    templateDir: "implement",
    targetDir: "05-execute",
    extraDirs: []
  }
];

function printHelp() {
  console.log(`x29

Usage:
  x29 init [target-directory] [--number <value>] [--title <value>]
  x29 --help
`);
}

function parseArgs(argv) {
  const args = argv.slice(2);

  if (args.length === 0) {
    return { command: "help" };
  }

  const [command, ...rest] = args;
  const options = {
    command,
    targetDirectory: null,
    number: null,
    title: null
  };

  if (command === "--help" || command === "-h") {
    return { command: "help" };
  }

  let i = 0;
  let consumedTarget = false;

  while (i < rest.length) {
    const token = rest[i];

    if (token === "--capability") {
      const capability = rest[i + 1];
      if (!capability) {
        throw new Error("Missing value for --capability");
      }

      const parsed = parseCapabilityName(capability);
      options.number = parsed.number;
      options.title = parsed.title;
      i += 2;
      continue;
    }

    if (token === "--number") {
      options.number = rest[i + 1] || options.number;
      i += 2;
      continue;
    }

    if (token === "--title") {
      options.title = rest[i + 1] || options.title;
      i += 2;
      continue;
    }

    if (!consumedTarget && !token.startsWith("--")) {
      options.targetDirectory = token;
      consumedTarget = true;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return options;
}

function parseCapabilityName(capability) {
  const match = capability.match(/^JA-(.+?)-(.+)$/);
  if (!match) {
    throw new Error("Capability names must match JA-<number>-<Short-Title>");
  }

  return {
    number: match[1],
    title: match[2]
  };
}

function normalizeNumber(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    throw new Error("A capability number is required.");
  }

  return trimmed.replace(/^JA-/i, "");
}

function normalizeTitle(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    throw new Error("A short title is required.");
  }

  const normalized = trimmed
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  if (!normalized) {
    throw new Error("The short title must contain letters or numbers.");
  }

  return normalized;
}

function buildCapabilityName(number, title) {
  return `JA-${normalizeNumber(number)}-${normalizeTitle(title)}`;
}

async function promptForMissingInitValues(options) {
  if (options.targetDirectory && options.number && options.title) {
    return options;
  }

  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  });

  try {
    const targetDirectory =
      options.targetDirectory ||
      (await rl.question("Target location [.]: ")) ||
      ".";
    const number =
      options.number ||
      (await rl.question("Capability number: "));
    const title =
      options.title ||
      (await rl.question("Short title: "));

    return {
      ...options,
      targetDirectory,
      number,
      title
    };
  } finally {
    rl.close();
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDir(source, target) {
  ensureDir(target);

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
      continue;
    }

    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function initializeStageTemplates(capabilityRoot) {
  for (const stage of stageLayout) {
    const targetStageRoot = path.join(capabilityRoot, stage.targetDir);
    ensureDir(targetStageRoot);
    copyDir(path.join(templateRoot, stage.templateDir), targetStageRoot);

    for (const extraDir of stage.extraDirs) {
      ensureDir(path.join(targetStageRoot, extraDir));
      writeFileIfMissing(
        path.join(targetStageRoot, extraDir, "README.md"),
        `# ${stage.targetDir}/${extraDir}

Use this directory for supporting stage material that should remain reviewable but does not need a fixed artifact template.
`
      );
    }
  }
}

function writeFileIfMissing(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

function initWorkspace(targetDirectory, capabilityName) {
  const resolvedTarget = path.resolve(process.cwd(), targetDirectory);
  const capabilityRoot = path.join(resolvedTarget, "capabilities", capabilityName);

  ensureDir(resolvedTarget);
  ensureDir(path.join(resolvedTarget, "capabilities"));
  ensureDir(capabilityRoot);
  initializeStageTemplates(capabilityRoot);

  writeFileIfMissing(
    path.join(resolvedTarget, "x29.md"),
    `# x29 Workspace

This workspace was initialized by \`x29 init\`.

- capability root: \`capabilities/${capabilityName}\`
- workflow: \`01-define -> 02-design -> 03-map -> 04-plan -> 05-execute\`
- collaboration: document-centric with inline \`human:\` annotations
`
  );

  writeFileIfMissing(
    path.join(capabilityRoot, "README.md"),
    `# ${capabilityName}

This capability folder was generated by \`x29 init\`.

Use the numbered stage directories to work progressively from definition through execution. Keep the documents small, reviewable, and easy to refine in parallel.
`
  );

  console.log(`Initialized x29 workspace at ${resolvedTarget}`);
  console.log(`Capability scaffold created at capabilities/${capabilityName}`);
}

async function main() {
  try {
    const parsedOptions = parseArgs(process.argv);

    if (parsedOptions.command === "help") {
      printHelp();
      return;
    }

    if (parsedOptions.command !== "init") {
      throw new Error(`Unknown command: ${parsedOptions.command}`);
    }

    const options = await promptForMissingInitValues(parsedOptions);
    const capabilityName = buildCapabilityName(options.number, options.title);
    initWorkspace(options.targetDirectory, capabilityName);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();
