---
name: "x29-plan-refine"
description: "Used when one slice, dependency, or spec needs deeper planning detail."
---

# Plan / Refine

## Routing Contract

- **Stage:** `plan`
- **Mode:** `refine`
- **Trigger requests:** “refine slice 2”, “resolve planning comments”.
- **Problem solved:** Improves slice boundaries, acceptance handoff, and sequence quality.
- **Common lenses:**
- delivery
- serviceability
- release

## File Scope

### Reads
- `04-plan/**/*.md`
- `03-map/**/*.md`
- `02-design/**/*.md`

### Writes
- `bounded updates to 04-plan/value-slices.md, 04-plan/spec-index.md, and related plan docs`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Over-specify implementation minutiae
- Hide cross-team dependency risk

## Done Means

Refined plan area is clearer, reviewable, and still grounded in upstream artifacts.

## Next Likely Step

Use stage readiness to decide whether to run another `plan/refine` pass, a `plan` validation gate, or hand off to the next stage.

