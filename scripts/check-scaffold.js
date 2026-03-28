const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

const requiredPaths = [
  "README.md",
  "AGENTS.md",
  "package.json",
  "docs/usage.md",
  "docs/init.md",
  "src/cli.js",
  "skills",
  "templates",
  "examples/sample-capability"
];

let missing = 0;

for (const relativePath of requiredPaths) {
  const fullPath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing: ${relativePath}`);
    missing += 1;
  }
}

if (missing > 0) {
  process.exitCode = 1;
} else {
  console.log("Scaffold check passed.");
}
