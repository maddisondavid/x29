# Using x29

## Team Workflow

The expected workflow is straightforward:

1. Create or select a capability folder.
   Recommended naming: `JA-<number>-Short-Title`
2. Start in `01-define/`.
3. Move through the stages in order: `01-define`, `02-design`, `03-map`, `04-plan`, `05-execute`.
4. Within a stage, work through Breakdown (`breakdown`), Refine (`refine`), Validate (`validate`), and optional Synthesis (`synthesize`).
5. Do not advance stages just because a document exists; advance when the stage is actually ready.

Before any agent starts stage work, it should confirm which capability number is in scope and verify that a matching directory exists in `capabilities/JA-<number>-<title>/`. If no matching capability directory exists, direct the user to run `x29 init` before continuing.

## Collaboration Pattern

- Documents hold the working state.
- Chat should select the next operation against those documents.
- Humans annotate files directly with `human:` when they need correction, emphasis, or a decision trail.
- Agents should refine one file or one concern at a time unless explicitly asked to run the `synthesize` mode.

## Choosing Depth

Use fewer files and lighter refinement for low-risk changes. Use more complete stage artifacts when the change has broader impact, meaningful tradeoffs, or real implementation sequencing risk.

## Suggested Review Rhythm

- Breakdown (`breakdown`): establish what is known, missing, and in scope
- Refine (`refine`): deepen one area without trying to solve everything at once
- Validate (`validate`): confirm readiness and call out blockers
- Synthesis (`synthesize`): produce a concise stakeholder-facing rollup when needed

## Capability Layout

The initializer creates a structure under `capabilities/<capability-name>/` using numbered stage directories:

- `notebook/`
- `01-define/`
- `02-design/`
- `03-map/`
- `04-plan/`
- `05-execute/`

`notebook/` is the shared loose-input area for human notes, meeting notes, stakeholder feedback, and other working material. Teams can trim or expand the artifact set as needed, but the stage folder pattern should remain stable so the skills stay reusable.

`x29 init` creates the stage directories but does not create stage files inside them. Those files should be added later by agents when a stage actually starts.

## Windsurf Integration

To install the current x29 skills into a repository for Windsurf, run:

```bash
x29 install-windsurf <target-repository>
```

The command writes flat skill directories under `.windsurf/skills/` using x29-prefixed names such as `x29-map-refine` and `x29-implement-verify`.

Rerunning the command is safe. It refreshes the x29-managed skills and removes stale `x29-*` skill folders that no longer exist in the toolkit source, while leaving unrelated `.windsurf` content intact.

## Codex Integration

To install the current x29 skills into a repository for Codex, run:

```bash
x29 install-codex <target-repository>
```

The command writes flat skill directories under `.codex/skills/` using x29-prefixed names such as `x29-map-refine` and `x29-implement-verify`.

Rerunning the command is safe. It refreshes the x29-managed skills and removes stale `x29-*` skill folders that no longer exist in the toolkit source, while leaving unrelated `.codex` content intact.
