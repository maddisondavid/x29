---
name: "x29-design-validate"
description: "Use for the design stage when checking whether the proposed solution is coherent enough to progress into impact mapping."
---

# Design / Validate

## Purpose

Check whether the design is ready to move into `map` by testing internal coherence, traceability to `define`, and risk visibility.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `02-design/` files
- relevant `01-define/` files

## Expected Outputs

- a readiness judgment
- explicit contradictions, gaps, and unresolved tradeoffs
- a recommendation for the next design pass if not ready

## May Read

- all files under `01-define/`
- all files under `02-design/`

## May Write

- `02-design/risks-and-tradeoffs.md`
- a short readiness note in `02-design/decision.md`

## Must Not Do

- bless a design that cannot be traced back to the stated problem
- hide operational or dependency risk
- invent missing design detail during validation without saying so

## Handoff

Hand off to `map/context-breakdown` when the chosen design is clear enough to analyze impact.

## TODO

- Add validation prompts for migration-heavy or legacy integration cases.
