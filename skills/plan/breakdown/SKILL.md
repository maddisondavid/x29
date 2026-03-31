---
name: "x29-plan-breakdown"
description: "Used when mapping is ready and delivery sequencing must be initialized."
---

# Plan / Breakdown

## Routing Contract

- **Stage:** `plan`
- **Mode:** `breakdown`
- **Trigger requests:** “start planning”, “break down value slices”.
- **Problem solved:** Creates initial value slices, sequencing assumptions, and planning gaps.
- **Common lenses:**
- delivery
- risk
- stakeholders

## File Scope

### Reads
- `04-plan/**/*.md (if present)`
- `03-map/**/*.md`
- `02-design/**/*.md`
- `01-define/**/*.md`

### Writes
- `04-plan/value-slices.md`
- `04-plan/spec-index.md`
- `04-plan/spec-template.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Convert plan into giant task backlog
- Ignore unresolved dependency sequencing
- Drift into implementation execution

## Done Means

Planning package defines reviewable slices and explicit sequence assumptions.

## Next Likely Step

Use stage readiness to decide whether to run another `plan/breakdown` pass, a `plan` validation gate, or hand off to the next stage.

