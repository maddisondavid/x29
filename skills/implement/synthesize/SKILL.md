---
name: "x29-implement-synthesize"
description: "Used to summarize delivered implementation outcomes for stakeholders."
---

# Implement / Synthesis

## Routing Contract

- **Stage:** `implement`
- **Mode:** `synthesis`
- **Trigger requests:** “summarize implementation”, “create delivery update”.
- **Problem solved:** Produces concise delivery communication from execution records and verification status.
- **Common lenses:**
- stakeholders
- delivery

## File Scope

### Reads
- `05-execute/**/*.md`
- `04-plan/value-slices.md`

### Writes
- `artifacts/stakeholder-rollup.md`
- `05-execute/implementation-notes.md (summary section)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Hide unresolved issues in final summary
- Rewrite execution history

## Done Means

Summary states what shipped, what is pending, and what validation evidence exists.

## Next Likely Step

Use stage readiness to decide whether to run another `implement/synthesis` pass, a `implement` validation gate, or hand off to the next stage.

