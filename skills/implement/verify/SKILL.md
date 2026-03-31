---
name: "x29-implement-verify"
description: "Used as the execution readiness gate for correctness and handoff."
---

# Implement / Verify

## Routing Contract

- **Stage:** `implement`
- **Mode:** `verify`
- **Trigger requests:** “are we done with this slice?”, “verify execute stage”.
- **Problem solved:** Checks evidence quality (tests/reviews/observed behavior) and unresolved issues before closure.
- **Common lenses:**
- quality
- risk
- operability

## File Scope

### Reads
- `05-execute/**/*.md`
- `04-plan/**/*.md`
- `relevant verification artifacts`

### Writes
- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Declare success without evidence
- Close issues by assumption

## Done Means

Verification judgment is evidence-backed, with clear follow-up actions when not ready.

## Next Likely Step

Use stage readiness to decide whether to run another `implement/verify` pass, a `implement` validation gate, or hand off to the next stage.

