---
name: "x29-define-refine"
description: "Used when Define artifacts exist and one concern area needs focused improvement through a specific lens."
---

# Define / Refine

## Routing Contract

- **Stage:** `define`
- **Mode:** `refine`
- **Trigger requests:** “review this from a security lens”, “resolve comments in serviceability acceptance criteria”, or any Define-focused improvement request.
- **Problem solved:** Improves one Define concern at a time while keeping uncertainty visible and file scope bounded.
- **Common lenses:**
- security
- serviceability
- observability
- data-contracts
- ux-workflow
- performance-scale
- operability-support
- hardware

## File Scope

### Reads
- `01-define/**/*.md or define/**/*.md`
- `notebook/**/*.md`
- `selected lens reference under references/lenses/`

### Writes
- `bounded updates inside 01-define/ or define/ files`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Rewrite the whole stage in one pass
- Change other stages
- Remove unresolved `human:` comments without tracking them

## Done Means

Lens-focused updates are complete, unresolved items remain explicit, and the next lens or validation step is stated.

## Next Likely Step

Use stage readiness to decide whether to run another `define/refine` pass, a `define` validation gate, or hand off to the next stage.

