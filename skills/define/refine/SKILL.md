---
name: "x29-define-refine"
description: "Use for the define stage when one area of scope, acceptance criteria, assumptions, or open questions needs to be deepened in a reviewable document-first way."
---

# Define / Refine

## Purpose

Deepen one aspect of the `define` stage at a time, such as acceptance criteria, scope boundaries, assumptions, or unresolved questions.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `01-define/` working files
- a target focus area chosen by the user or inferred from `human:` markup
- any known constraints that affect the definition

## Expected Outputs

- one or more improved `01-define/` documents with clearer, more testable content
- explicit unresolved items preserved instead of silently flattened
- a note about whether the stage is ready for validation or needs another refinement pass

## May Read

- all files under `01-define/`
- nearby `02-design/` artifacts only if they already exist and help resolve terminology

## May Write

- `01-define/summary.md`
- `01-define/acceptance-criteria.md`
- `01-define/assumptions.md`
- `01-define/open-questions.md`

## Must Not Do

- redesign the solution inside `define`
- remove stakeholder ambiguity by guessing
- rewrite every file when only one area needs refinement

## Handoff

Hand off to `define/validate` when acceptance criteria, assumptions, and open questions are stable enough for a readiness check.

## Future Direction

Later versions should support role or perspective switching within the same stage, for example product, delivery, support, or compliance viewpoints, without changing the overall `define` workflow.

## TODO

- Add perspective-aware prompts while keeping the write scope narrow.
