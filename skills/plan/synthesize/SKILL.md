---
name: "x29-plan-synthesize"
description: "Use for the plan stage when the working plan needs to be condensed into a cleaner stakeholder-facing rollout summary."
---

# Plan / Synthesize

## Purpose

Produce a concise stakeholder-facing plan summary from the decomposed planning documents.

## Expected Inputs

- current `04-plan/` files
- optional audience target

## Expected Outputs

- a readable summary of slices, sequencing, and major dependencies

## May Read

- all files under `04-plan/`
- `03-map/components-impacted.md` when useful for framing

## May Write

- `04-plan/spec-index.md`

## Must Not Do

- overwrite detailed slice notes
- hide delivery uncertainty to make the plan look cleaner

## Handoff

Hand off to `plan/validate` if synthesis exposes missing readiness detail.

## TODO

- Add a concise implementation kickoff summary format.
