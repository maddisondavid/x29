---
name: "x29-design-synthesize"
description: "Used to produce a concise design summary for broader review."
---

# Design / Synthesis

## Routing Contract

- **Stage:** `design`
- **Mode:** `synthesis`
- **Trigger requests:** “create design summary for leadership”, “synthesize design”.
- **Problem solved:** Condenses design package while preserving chosen direction and tradeoffs.
- **Common lenses:**
- stakeholders
- workflows

## File Scope

### Reads
- `02-design/**/*.md`
- `01-define/summary.md`

### Writes
- `02-design/decision.md (summary section)`
- `artifacts/stakeholder-rollup.md (if requested)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Erase alternatives and risks
- Replace decomposed design files with a single document

## Done Means

Stakeholder rollup exists and still points back to detailed design artifacts.

## Next Likely Step

Use stage readiness to decide whether to run another `design/synthesis` pass, a `design` validation gate, or hand off to the next stage.

