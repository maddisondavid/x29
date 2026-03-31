---
name: "x29-map-refine"
description: "Used when one mapped impact area needs deeper treatment."
---

# Map / Refine

## Routing Contract

- **Stage:** `map`
- **Mode:** `refine`
- **Trigger requests:** “refine dependency impact”, “resolve map comments”, or perspective-specific map requests.
- **Problem solved:** Improves one mapping concern (dependencies, contracts, flows, operations) with bounded edits.
- **Common lenses:**
- dependencies
- serviceability
- security
- performance

## File Scope

### Reads
- `03-map/**/*.md`
- `02-design/**/*.md`
- `01-define/**/*.md`

### Writes
- `bounded updates in 03-map/**/*.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Re-solve design decisions
- Create plan slices/tasks
- Hide unresolved dependencies

## Done Means

Chosen impact area is clearer and remaining risk/questions are explicit.

## Next Likely Step

Use stage readiness to decide whether to run another `map/refine` pass, a `map` validation gate, or hand off to the next stage.

