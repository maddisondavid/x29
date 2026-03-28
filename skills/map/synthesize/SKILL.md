---
name: "x29-map-synthesize"
description: "Use for the map stage when scattered impact notes need a cleaner summary for downstream planning and review."
---

# Map / Synthesize

## Purpose

Produce a concise impact summary that explains what areas are touched and why, while preserving the detailed mapping documents underneath.

## Expected Inputs

- current `03-map/` working files
- optional target audience

## Expected Outputs

- a clean summary of system impact and operational considerations

## May Read

- all files under `03-map/`
- `02-design/decision.md`

## May Write

- `03-map/components-impacted.md`

## Must Not Do

- erase uncertainty around unknown impact zones
- replace the detailed mapping artifacts

## Handoff

Hand off to `map/validate` if synthesis reveals weak coverage.

## TODO

- Add a stakeholder-friendly impact summary pattern.
