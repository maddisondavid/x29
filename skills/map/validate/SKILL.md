---
name: "x29-map-validate"
description: "Used to check whether mapping is complete enough for planning."
---

# Map / Validate

## Routing Contract

- **Stage:** `map`
- **Mode:** `validate`
- **Trigger requests:** “are we ready for planning?”, “validate map”.
- **Problem solved:** Assesses whether component, contract, and dependency understanding is sufficient for slicing work.
- **Common lenses:**
- serviceability
- observability
- dependency-risk

## File Scope

### Reads
- `03-map/**/*.md`
- `02-design/**/*.md`

### Writes
- `03-map/02-open-questions.md (blocker status)`
- `03-map/00-overview.md (readiness note)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Mark ready with vague dependencies
- Ignore operational visibility gaps

## Done Means

Readiness decision identifies concrete blockers or confirms map completeness for planning.

## Next Likely Step

Use stage readiness to decide whether to run another `map/validate` pass, a `map` validation gate, or hand off to the next stage.

