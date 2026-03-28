---
name: "x29-design-context-breakdown"
description: "Use for the design stage when the next task is to summarize the current solution direction, decisions in progress, tradeoffs, and design gaps."
---

# Design / Context Breakdown

## Purpose

Summarize the current design state by identifying what solution direction is being considered, what decisions already exist, and where design ambiguity still remains.

## Expected Inputs

- existing `02-design/` files
- relevant `01-define/` artifacts
- inline `human:` annotations that affect solution direction

## Expected Outputs

- a clear view of the current design posture
- missing design questions captured explicitly
- a recommendation for the next refinement area

## May Read

- all files under `02-design/`
- all files under `01-define/`

## May Write

- `02-design/decision.md`
- `02-design/options-considered.md`
- `02-design/risks-and-tradeoffs.md`

## Must Not Do

- pretend a design decision exists when only a preference exists
- skip tradeoffs to force a quick answer
- push implementation tasks into the design stage

## Handoff

Hand off to `design/refine` for a specific decision area, or to `design/validate` when the design appears coherent enough for review.

## TODO

- Improve guidance for architecture-heavy versus incremental design work.
