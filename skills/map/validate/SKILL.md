# Map / Validate

## Purpose

Check whether the impact analysis is complete enough to support planning and execution sequencing.

## Expected Inputs

- current `03-map/` artifacts
- upstream `02-design/` reasoning

## Expected Outputs

- a readiness judgment
- explicit impact gaps and risk hotspots
- a recommendation for the next mapping action if not ready

## May Read

- all files under `02-design/`
- all files under `03-map/`

## May Write

- `03-map/dependency-impact.md`
- `03-map/observability-serviceability.md`

## Must Not Do

- mark the stage ready when major integration surfaces remain vague
- ignore operational visibility or supportability concerns

## Handoff

Hand off to `plan/context-breakdown` when the impact map is strong enough to sequence work intentionally.

## TODO

- Add clearer minimum readiness criteria for high-risk infrastructure changes.
