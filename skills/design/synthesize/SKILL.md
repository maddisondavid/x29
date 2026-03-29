---
name: "x29-design-synthesize"
description: "Use for the design stage when decomposed design notes need to be turned into a cleaner stakeholder-facing design rollup."
---

# Design / Synthesize

## Purpose

Create a stakeholder-facing design rollup that communicates the chosen approach, major alternatives, and key tradeoffs without replacing the source design files.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

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
