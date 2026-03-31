---
name: "x29-map-breakdown"
description: "Used when Design is approved and impact mapping must begin."
---

# Map / Breakdown

## Routing Contract

- **Stage:** `map`
- **Mode:** `breakdown`
- **Trigger requests:** “start map stage”, “map impacted components”, or initial map requests.
- **Problem solved:** Translates design intent into impacted components, contracts, and flow artifacts.
- **Common lenses:**
- data/contracts
- workflows
- serviceability
- observability

## File Scope

### Reads
- `02-design/**/*.md`
- `03-map/**/*.md (if present)`
- `system-architecture/**/*`
- `relevant code structure`
- `notebook/**/*.md`

### Writes
- `03-map/00-overview.md`
- `03-map/01-component-index.md`
- `03-map/02-open-questions.md`
- `03-map/03-control-and-data-paths.md`
- `03-map/components/*.md`
- `03-map/contracts/*.md`
- `03-map/contracts/component-contract-index.md`
- `03-map/persona-flows/*.md`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Generate implementation tasks
- Assume hidden component behavior without evidence
- Skip uncertainty logging for boundary gaps

## Done Means

Impact map covers major components/contracts/flows with explicit unknowns.

## Next Likely Step

Use stage readiness to decide whether to run another `map/breakdown` pass, a `map` validation gate, or hand off to the next stage.

