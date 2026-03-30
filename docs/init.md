# x29 Init

## Command

```bash
x29 init
```

Optional arguments:

```bash
x29 init <target-directory> --number <value> --title <value>
```

The interactive flow asks for:

- target location
- capability number
- short title

You can still provide any or all of those values on the command line. Missing values will be prompted for.

Recommended capability naming:

```text
JA-<number>-Short-Title
```

## Windsurf Skills

Use the separate command below to install x29 skills into a target repository's `.windsurf` directory:

```bash
x29 install-windsurf
```

By default, the command installs into the user's global `.windsurf/skills/` directory.

To install into a specific repository instead, pass a target path:

```bash
x29 install-windsurf <target-repository>
```

Installed layout:

```text
.windsurf/
  skills/
    x29-define-breakdown/
      SKILL.md
    x29-design-refine/
      SKILL.md
    ...
```

The command manages only `x29-*` skill directories inside the target `.windsurf/skills/` directory. On rerun it updates current x29 skills and removes stale x29-managed entries, but leaves unrelated `.windsurf` files and non-x29 skills untouched.

## Codex Skills

Use the separate command below to install x29 skills into a target repository's `.codex` directory:

```bash
x29 install-codex <target-repository>
```

If the target path is omitted, the command prompts for it.

Installed layout:

```text
.codex/
  skills/
    x29-define-breakdown/
      SKILL.md
    x29-design-refine/
      SKILL.md
    ...
```

The command manages only `x29-*` skill directories inside `.codex/skills/`. On rerun it updates current x29 skills and removes stale x29-managed entries, but leaves unrelated `.codex` files and non-x29 skills untouched.

## What it creates

The bootstrap command creates:

- a target workspace if it does not exist
- `capabilities/<capability-name>/`
- a root `notebook/` directory inside the capability for loose human notes and working inputs
- numbered stage subdirectories

It does not pre-populate stage files. Those are expected to be added later by agents as stage work begins.

## Practical intent

This initializer is intentionally simple. It does not attempt to infer project topology, inspect runtime frameworks, or generate bespoke stage logic. It exists to make `x29` feel installable and to remove setup friction.

## TODO

- Add flags for lightweight vs fuller bootstrap modes
- Add optional sample capability content packs
- Add repo-aware initialization for existing delivery conventions
