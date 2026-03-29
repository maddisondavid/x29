---
name: "x29-plan-refine"
description: "Use for the plan stage when one slice, spec, dependency, or delivery sequence needs deeper planning detail or later role-based refinement."
---

# Plan / Refine

## Purpose

Improve the delivery plan one area at a time, especially value slicing, spec indexing, sequencing, and implementation readiness.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `04-plan/` documents
- upstream stage artifacts
- specific sequencing or slicing concern to refine

## Expected Outputs

- clearer value slices
- a more useful spec index
- improved implementation guidance that still remains reviewable

## May Read

- all files under `01-define/`
- all files under `02-design/`
- all files under `03-map/`
- all files under `04-plan/`

## May Write

- `04-plan/value-slices.md`
- `04-plan/spec-index.md`
- `04-plan/spec-template.md`

## Must Not Do

- collapse the plan into an over-detailed task tracker
- hide unresolved dependencies
- assume one-shot implementation readiness without slice boundaries

## Handoff

Hand off to `plan/validate` when slices are reviewable, sequenced, and grounded in the previous stages.

## Future Direction

Later versions should support role or perspective switching for delivery, QA, platform, and release-management lenses within the same planning stage.

## TODO

- Add heuristics for choosing slice size and sequencing confidence.
