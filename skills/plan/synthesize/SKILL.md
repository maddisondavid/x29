---
name: "x29-plan-synthesize"
description: "Used to create a stakeholder-facing rollout summary from plan artifacts."
---

# Plan / Synthesis

## Routing Contract

- **Stage:** `plan`
- **Mode:** `synthesis`
- **Trigger requests:** “create rollout summary”, “synthesize plan for stakeholders”.
- **Problem solved:** Condenses plan details into a shareable summary while preserving caveats.
- **Common lenses:**
- stakeholders
- delivery

## File Scope

### Reads
- `04-plan/**/*.md`
- `03-map/00-overview.md`

### Writes
- `artifacts/stakeholder-rollup.md or 04-plan/spec-index.md summary section`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Remove dependency caveats
- Replace detailed plan docs with summary

## Done Means

Summary communicates slices, sequence, risks, and next checkpoint clearly.

## Next Likely Step

Use stage readiness to decide whether to run another `plan/synthesis` pass, a `plan` validation gate, or hand off to the next stage.

