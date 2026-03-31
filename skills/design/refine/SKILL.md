---
name: "x29-design-refine"
description: "Used when one design area needs deeper reasoning through a selected lens."
---

# Design / Refine

## Routing Contract

- **Stage:** `design`
- **Mode:** `refine`
- **Trigger requests:** “refine this design for observability”, “review rollout strategy”, or focused design refinement requests.
- **Problem solved:** Sharpens one design area and resolves targeted `human:` comments.
- **Common lenses:**
- architecture-shape
- interfaces-contracts
- rollout-migration
- observability-telemetry
- performance-capacity
- security-compliance

## File Scope

### Reads
- `02-design/**/*.md`
- `01-define/**/*.md`
- `selected design lens references`
- `notebook/**/*.md`

### Writes
- `bounded updates to 02-design/**/*.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Rewrite all design files at once
- Drift into code-level implementation instructions
- Change stage directories outside design

## Done Means

Targeted design concern is materially clearer, with unresolved items tracked explicitly.

## Next Likely Step

Use stage readiness to decide whether to run another `design/refine` pass, a `design` validation gate, or hand off to the next stage.

