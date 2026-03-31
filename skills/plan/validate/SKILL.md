---
name: "x29-plan-validate"
description: "Used for Plan readiness before execution starts."
---

# Plan / Validate

## Routing Contract

- **Stage:** `plan`
- **Mode:** `validate`
- **Trigger requests:** “is plan ready?”, “validate before implementation”.
- **Problem solved:** Determines whether slices are small enough, sequenced, and dependency-aware for execute stage.
- **Common lenses:**
- readiness
- dependency-risk

## File Scope

### Reads
- `04-plan/**/*.md`
- `03-map/**/*.md for traceability`

### Writes
- `04-plan/spec-index.md (status note)`
- `04-plan/value-slices.md (blocker flags)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Mark ready with oversized slices
- Ignore blocked prerequisites
- Advance without explicit evidence

## Done Means

Gate decision is explicit: ready, conditionally ready, or not ready with blockers.

## Next Likely Step

Use stage readiness to decide whether to run another `plan/validate` pass, a `plan` validation gate, or hand off to the next stage.

