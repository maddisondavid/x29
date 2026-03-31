# x29 Init and Toolkit Installation

x29 remains an installable, repo-backed toolkit. The interaction model is stage-based conversation, while skills remain internal runtime mechanisms.

## Initialize a Capability Workspace

```bash
x29 init
```

Optional non-interactive form:

```bash
x29 init <target-directory> --number <value> --title <value>
```

### Prompts

- target location
- capability number
- short title

Recommended naming:

```text
JA-<number>-Short-Title
```

## Generated Structure

`x29 init` creates:

- `capabilities/<capability-name>/`
- `notebook/`
- `01-define/`
- `02-design/`
- `03-map/`
- `04-plan/`
- `05-execute/`

It does not pre-populate stage files; those are created during stage work.

## Install Skills for Windsurf

```bash
x29 install-windsurf
x29 install-windsurf <target-repository>
```

- default target: `~/.windsurf/skills/`
- optional target: `<repo>/.windsurf/skills/`
- managed scope: only `x29-*` skill folders
- rerun behavior: refresh existing `x29-*` skills and remove stale `x29-*` entries

## Install Skills for Codex

```bash
x29 install-codex
x29 install-codex <target-repository>
```

- target: `<repo>/.codex/skills/` (prompted if omitted)
- managed scope: only `x29-*` skill folders
- rerun behavior: refresh existing `x29-*` skills and remove stale `x29-*` entries

## Practical Intent

The CLI keeps setup simple while preserving a real toolkit footprint:

- staged workspace bootstrap
- portable skill installation
- deterministic update behavior for x29-managed skills

## TODO

- Add optional flags for lightweight vs fuller stage scaffolds.
- Add optional orchestration profile presets for enterprise environments.
