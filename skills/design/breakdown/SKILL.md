---
name: "x29-design-breakdown"
description: "Used when Define is ready and the team needs initial design options and decision framing."
---

# Design / Breakdown

## Routing Contract

- **Stage:** `design`
- **Mode:** `breakdown`
- **Trigger requests:** “start design”, “break down solution options”, or first Design-stage request.
- **Problem solved:** Builds first Design package with options, decision framing, blueprint, and risks.
- **Common lenses:**
- architecture-shape
- interfaces-contracts
- security-compliance
- reliability-operability

## File Scope

### Reads
- `01-define/**/*.md`
- `02-design/**/*.md (if present)`
- `system-architecture/**/*`
- `notebook/**/*.md`

### Writes
- `02-design/solution-blueprint.md`
- `02-design/options-considered.md`
- `02-design/decision.md`
- `02-design/risks-and-tradeoffs.md`
- `02-design/hardware.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Commit to one design without recording tradeoffs
- Create Map/Plan implementation detail
- Suppress unresolved design risks

## Done Means

Design artifacts describe options, selected direction, tradeoffs, and known open questions.

## Next Likely Step

Use stage readiness to decide whether to run another `design/breakdown` pass, a `design` validation gate, or hand off to the next stage.

