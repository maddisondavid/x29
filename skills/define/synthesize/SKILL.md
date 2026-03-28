---
name: "x29-define-synthesize"
description: "Use for the define stage when working notes need to be rolled up into a cleaner stakeholder-facing definition summary without losing important uncertainty."
---

# Define / Synthesize

## Purpose

Produce a cleaner stakeholder-facing rollup of the `define` stage from the decomposed working files while preserving the underlying source documents.

## Expected Inputs

- current `01-define/` files
- optionally a target audience such as product leadership, engineering, or delivery

## Expected Outputs

- a concise rollup in `01-define/summary.md` or a parallel stakeholder summary
- preserved traceability back to the detailed source files

## May Read

- all files under `01-define/`

## May Write

- `01-define/summary.md`

## Must Not Do

- overwrite detailed working notes with a polished summary
- erase disagreement, caveats, or `human:` markup from source files

## Handoff

Hand off to `define/validate` if synthesis reveals missing clarity or unresolved contradictions.

## TODO

- Add audience-specific synthesis variants.
