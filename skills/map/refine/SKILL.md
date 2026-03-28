# Map / Refine

## Purpose

Deepen one impact area at a time by making dependencies, interfaces, data changes, and serviceability concerns more explicit.

## Expected Inputs

- current `03-map/` documents
- upstream `01-define/` and `02-design/` context
- optionally codebase observations supplied by the user

## Expected Outputs

- sharper impact analysis
- clearer visibility into cross-component effects
- explicit unknowns that should influence planning

## May Read

- all files under `01-define/`
- all files under `02-design/`
- all files under `03-map/`

## May Write

- `03-map/components-impacted.md`
- `03-map/api-and-data-changes.md`
- `03-map/dependency-impact.md`
- `03-map/observability-serviceability.md`

## Must Not Do

- hide uncertain dependencies
- invent implementation tasks that belong in `plan`
- broaden the work item beyond the intended capability without saying so

## Handoff

Hand off to `map/validate` when impact and dependency understanding is strong enough to sequence delivery.

## Future Direction

Later versions should support perspective switching for operations, data, platform, security, and support lenses within the same map stage.

## TODO

- Add structured prompts for serviceability and migration analysis.
