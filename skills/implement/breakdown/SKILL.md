---
name: "x29-implement-breakdown"
description: "Used when execution starts and the current slice must be oriented before coding advances."
---

# Implement / Breakdown

## Routing Contract

- **Stage:** `implement`
- **Mode:** `breakdown`
- **Trigger requests:** “start execute stage”, “what are we implementing now?”.
- **Problem solved:** Aligns implementation scope, constraints, and unresolved issues before action.
- **Common lenses:**
- scope-boundaries
- serviceability

## File Scope

### Reads
- `04-plan/**/*.md`
- `05-execute/**/*.md`
- `relevant code context`

### Writes
- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Start coding with unclear slice boundaries
- Ignore unresolved blockers

## Done Means

Execution context is clear enough to proceed with a bounded implementation pass.

## Next Likely Step

Use stage readiness to decide whether to run another `implement/breakdown` pass, a `implement` validation gate, or hand off to the next stage.

