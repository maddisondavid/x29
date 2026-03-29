---
name: "x29-plan-breakdown"
description: "Use for the plan stage when the next task is to summarize current slices, sequencing, delivery assumptions, and remaining planning gaps."
---

# Plan / Breakdown

## Purpose

Orient the `plan` stage by identifying the current slice strategy, sequencing assumptions, and readiness for implementation planning.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `04-plan/` files
- relevant `01-define/`, `02-design/`, and `03-map/` artifacts

## Expected Outputs

- a summary of the planning state
- explicit planning gaps, dependencies, or blockers
- a recommendation for the next planning refinement pass

## May Read

- all files under `01-define/`
- all files under `02-design/`
- all files under `03-map/`
- all files under `04-plan/`

## May Write

- `04-plan/value-slices.md`
- `04-plan/spec-index.md`

## Must Not Do

- treat planning as a generic task list
- bury sequencing risks
- jump straight to implementation without a staged plan

## Handoff

Hand off to `plan/refine` for slicing or spec structure work, or to `plan/validate` when the plan appears ready for execution.

## TODO

- Add guidance for lightweight plans versus multi-slice programs of work.
