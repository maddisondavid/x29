---
name: "x29-map-synthesize"
description: "Use for the map stage when scattered impact notes need a cleaner summary for downstream planning and review."
---

# Map / Synthesize

## Purpose

Produce a concise impact summary that explains what areas are touched and why, while preserving the detailed mapping documents underneath.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

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
