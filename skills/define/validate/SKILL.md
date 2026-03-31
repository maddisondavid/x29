---
name: "x29-define-validate"
description: "Used for Define readiness gates before moving to Design."
---

# Define / Validate

## Routing Contract

- **Stage:** `define`
- **Mode:** `validate`
- **Trigger requests:** “are we ready to move on?”, “validate define”, or readiness-check requests.
- **Problem solved:** Returns a clear readiness status (ready/conditional/not ready) with blockers and required follow-up.
- **Common lenses:**
- scope-boundaries
- stakeholders-workflows
- risk

## File Scope

### Reads
- `01-define/**/*.md`
- `notebook/**/*.md where `human:` comments affect readiness`

### Writes
- `01-define/open-questions.md (status updates only)`
- `01-define/summary.md (short readiness note only)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Auto-fix major gaps and then mark ready
- Advance stage without explicit rationale
- Ignore unresolved `human:` blockers

## Done Means

Readiness decision is explicit, evidence-based, and tied to concrete blockers or acceptance coverage.

## Next Likely Step

Use stage readiness to decide whether to run another `define/validate` pass, a `define` validation gate, or hand off to the next stage.

