---
name: "x29-define-synthesize"
description: "Used to produce a stakeholder rollup from decomposed Define artifacts."
---

# Define / Synthesis

## Routing Contract

- **Stage:** `define`
- **Mode:** `synthesis`
- **Trigger requests:** “create a stakeholder summary”, “synthesize define package”, or rollup requests.
- **Problem solved:** Creates a clear top-level define summary while preserving traceability and uncertainty.
- **Common lenses:**
- stakeholders
- product-intent

## File Scope

### Reads
- `01-define/**/*.md or define/**/*.md`
- `notebook/**/*.md when context is needed`

### Writes
- `capability-definition.md`
- `capability-definition-VXXXX.md (when replacing an existing file)`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Overwrite existing synthesis without versioning
- Hide open questions or caveats
- Replace detailed working files with a single monolith

## Done Means

Stakeholder-facing synthesis exists with explicit assumptions/open questions and references to detailed stage artifacts.

## Next Likely Step

Use stage readiness to decide whether to run another `define/synthesis` pass, a `define` validation gate, or hand off to the next stage.

