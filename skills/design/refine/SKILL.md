---
name: "x29-design-refine"
description: "Use for the design stage when one design area needs deeper option analysis, clearer rationale, or refinement from a later role or perspective."
---

# Design / Refine

## Purpose

Deepen one design area at a time by comparing options, clarifying the chosen approach, and documenting the reasoning behind it.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- `01-define/` artifacts
- current `02-design/` documents
- a specific topic to refine, such as interface shape, service boundary, or rollout approach

## Expected Outputs

- improved design documents with sharper reasoning
- explicit tradeoffs and decision rationale
- unresolved risks carried forward rather than hidden

## May Read

- all files under `01-define/`
- all files under `02-design/`
- existing `03-map/` files if they already exist and provide grounding

## May Write

- `02-design/options-considered.md`
- `02-design/decision.md`
- `02-design/solution-blueprint.md`
- `02-design/risks-and-tradeoffs.md`

## Must Not Do

- collapse directly into execution planning
- remove viable alternatives without recording why
- expand scope beyond the current capability without marking it

## Handoff

Hand off to `design/validate` when the proposed solution shape is stable enough for impact analysis.

## Future Direction

Later versions should support perspective switching inside the same design pass, such as platform, security, operations, or developer-experience viewpoints.

## TODO

- Add structured prompts for evaluating decision quality from multiple perspectives.
