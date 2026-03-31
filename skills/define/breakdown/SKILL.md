---
name: "x29-define-breakdown"
description: "Used when a capability enters Define and rough notes must be turned into an initial, reviewable definition package."
---

# Define / Breakdown

## Routing Contract

- **Stage:** `define`
- **Mode:** `breakdown`
- **Trigger requests:** “x29 define capability 123”, “I want to define capability 123”, or any request to start the Define stage.
- **Problem solved:** Creates the first structured Define artifacts from ambiguous notebook intent without pretending uncertainty is resolved.
- **Common lenses:**
- product-intent
- scope-boundaries
- stakeholders-workflows

## File Scope

### Reads
- `notebook/**/*.md`
- `01-define/**/*.md (if present)`
- `system-architecture/**/*`
- `capability README context`

### Writes
- `01-define/summary.md`
- `01-define/assumptions.md`
- `01-define/acceptance-criteria.md`
- `01-define/open-questions.md`
- `01-define/hardware.md`
- `notebook/capability-definition-notes.md (only if missing and needed)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Drift into Design/Map/Plan/Implement content
- Hide ambiguity or convert guesses into facts
- Delete unresolved `human:` concerns

## Done Means

Initial Define package exists, ambiguous areas are explicit, and next refinement targets are clearly called out.

## Next Likely Step

Use stage readiness to decide whether to run another `define/breakdown` pass, a `define` validation gate, or hand off to the next stage.

