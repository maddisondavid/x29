---
name: "x29-map-synthesize"
description: "Used to create a concise impact summary from detailed map artifacts."
---

# Map / Synthesis

## Routing Contract

- **Stage:** `map`
- **Mode:** `synthesis`
- **Trigger requests:** “summarize impact for stakeholders”, “synthesize map stage”.
- **Problem solved:** Produces a compact, review-friendly map summary for downstream consumers.
- **Common lenses:**
- stakeholders
- workflows

## File Scope

### Reads
- `03-map/**/*.md`
- `02-design/decision.md`

### Writes
- `03-map/00-overview.md or stakeholder summary artifact`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Delete detailed map files
- Mask uncertain impact zones

## Done Means

Summary clearly communicates what changes, why it changes, and what remains uncertain.

## Next Likely Step

Use stage readiness to decide whether to run another `map/synthesis` pass, a `map` validation gate, or hand off to the next stage.

