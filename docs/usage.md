# Using x29

## Team Workflow

The expected workflow is straightforward:

1. Create or select a capability folder.
   Recommended naming: `JA-<number>-Short-Title`
2. Start in `01-define/`.
3. Move through the stages in order: `01-define`, `02-design`, `03-map`, `04-plan`, `05-execute`.
4. Within a stage, work through `context-breakdown`, `refine`, `validate`, and optional `synthesize`.
5. Do not advance stages just because a document exists; advance when the stage is actually ready.

## Collaboration Pattern

- Documents hold the working state.
- Chat should select the next operation against those documents.
- Humans annotate files directly with `human:` when they need correction, emphasis, or a decision trail.
- Agents should refine one file or one concern at a time unless explicitly asked to synthesize.

## Choosing Depth

Use fewer files and lighter refinement for low-risk changes. Use more complete stage artifacts when the change has broader impact, meaningful tradeoffs, or real implementation sequencing risk.

## Suggested Review Rhythm

- `context-breakdown`: establish what is known, missing, and in scope
- `refine`: deepen one area without trying to solve everything at once
- `validate`: confirm readiness and call out blockers
- `synthesize`: produce a concise stakeholder-facing rollup when needed

## Capability Layout

The initializer creates a structure under `capabilities/<capability-name>/` using numbered stage directories:

- `01-define/`
- `02-design/`
- `03-map/`
- `04-plan/`
- `05-execute/`

Supporting working folders are included where they are most useful:

- `01-define/context/`
- `02-design/notebook/`
- `03-map/notebook/`

Teams can trim or expand the artifact set as needed, but the stage folder pattern should remain stable so the skills stay reusable.
