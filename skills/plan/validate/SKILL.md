---
name: "x29-plan-validate"
description: "Use for the plan stage when checking whether slices, specs, and sequencing are ready to support implementation."
---

# Plan / Validate

## Purpose

Check whether the plan is concrete enough to support implementation without pretending all unknowns have disappeared.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `04-plan/` files
- upstream stage artifacts where needed for traceability

## Expected Outputs

- a readiness judgment
- blockers or weak sequencing called out explicitly
- next-step guidance if another planning pass is needed

## May Read

- all files under `04-plan/`
- upstream stage summaries when needed for traceability

## May Write

- `04-plan/value-slices.md`
- `04-plan/spec-index.md`

## Must Not Do

- mark the stage ready when slices are too large to review safely
- ignore unresolved dependencies that will block implementation

## Handoff

Hand off to `implement/context-breakdown` when the plan is ready enough to start execution deliberately.

## TODO

- Add stronger validation patterns for multi-team sequencing.
