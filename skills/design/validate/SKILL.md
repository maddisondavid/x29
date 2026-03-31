---
name: "x29-design-validate"
description: "Used to decide whether Design is ready for Map."
---

# Design / Validate

## Routing Contract

- **Stage:** `design`
- **Mode:** `validate`
- **Trigger requests:** “is design ready?”, “validate design stage”, or move-forward checks.
- **Problem solved:** Evaluates coherence, feasibility, and decision quality before mapping.
- **Common lenses:**
- feasibility
- risk
- serviceability

## File Scope

### Reads
- `02-design/**/*.md`
- `01-define/**/*.md when traceability is needed`

### Writes
- `02-design/decision.md (readiness addendum only)`
- `02-design/risks-and-tradeoffs.md (blocker notes only)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Mark ready with missing decision rationale
- Ignore contradictions vs Define intent
- Invent map detail to patch design gaps

## Done Means

Readiness status and blockers are concrete enough to guide the next pass or handoff.

## Next Likely Step

Use stage readiness to decide whether to run another `design/validate` pass, a `design` validation gate, or hand off to the next stage.

