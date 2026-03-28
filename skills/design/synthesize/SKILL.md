---
name: "x29-design-synthesize"
description: "Use for the design stage when decomposed design notes need to be turned into a cleaner stakeholder-facing design rollup."
---

# Design / Synthesize

## Purpose

Create a stakeholder-facing design rollup that communicates the chosen approach, major alternatives, and key tradeoffs without replacing the source design files.

## Expected Inputs

- current `02-design/` working documents
- optional audience target

## Expected Outputs

- a concise design narrative for review
- stable references back to detailed documents

## May Read

- all files under `02-design/`
- `01-define/summary.md` when helpful for context framing

## May Write

- `02-design/decision.md`

## Must Not Do

- flatten meaningful design uncertainty
- overwrite detailed reasoning with presentation language

## Handoff

Hand off to `design/validate` if synthesis exposes inconsistencies or missing rationale.

## TODO

- Add a compact architecture review template.
