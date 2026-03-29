---
name: "x29-design-synthesize"
description: "Use for the design stage when decomposed Design artifacts need to be rolled up into a root-level `capability-design.md` document for stakeholder review without losing uncertainty, alternatives, or tradeoffs."
---

# Design / Synthesize

## Purpose

Produce a root-level `capability-design.md` file for the current capability by synthesizing decomposed Design artifacts into a stakeholder-facing document.

This is a synthesis pass, not a refinement or validation pass. Preserve uncertainty and traceability back to underlying Design files.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- current Design files under `02-design/` or `design/`
- relevant Define context when needed for framing
- optional notebook context when it explains unresolved direction
- optional target audience such as product leadership, architecture review, or delivery leadership

## Expected Outputs

- a root-level `capability-design.md` file inside the capability folder
- preserved alternatives, assumptions, caveats, and unresolved questions
- older root-level design file versioned before replacement when one already exists

Use the structure from [references/capability-design-template.md](references/capability-design-template.md).

## Output File Rules

Write synthesized output to:

- `capability-design.md`

If `capability-design.md` already exists:

- rename the existing file before writing the new one
- use the pattern `capability-design-VXXXX.md`
- use a zero-padded four-digit version number such as `V0001`, `V0002`, and so on
- choose the next available version number rather than overwriting

Then write the new synthesis to `capability-design.md`.

## Required Section Order

The synthesized output must contain these sections in this order:

1. `Summary`
2. `Design Goals and Constraints`
3. `Options Considered`
4. `Decision`
5. `Solution Blueprint`
6. `Risks and Tradeoffs`
7. `Open Questions`

Use the bundled template as default structure. Preserve this order even when a section is brief.

## Synthesis Behavior

- read the current Design package first
- synthesize from structured Design files before notebook sources
- keep source Design files as the detailed working set
- keep synthesized output readable and stakeholder-facing
- preserve uncertainty and disagreement rather than smoothing it away
- keep `human:` intent visible where it materially affects understanding

## May Read

- all files under `02-design/`
- all files under `design/`
- all files under `01-define/`
- `notebook/**/*.md`
- `notes/**/*.md`
- [references/capability-design-template.md](references/capability-design-template.md)

## May Write

- `capability-design.md`
- `capability-design-VXXXX.md`

## Must Not Do

- overwrite an existing `capability-design.md` without versioning it first
- overwrite decomposed Design working files with synthesized rollup content
- erase caveats, unresolved questions, or `human:` intent
- drift into Map, Plan, or Execute work

## Incomplete Information

When the Design package is incomplete:

- still produce the best available synthesis if requested
- state uncertainty clearly in relevant sections
- preserve unresolved items in `Open Questions`
- avoid turning weak source material into false certainty

## Handoff

Hand off to `design/refine` if synthesis exposes specific clarity gaps that need a bounded design pass.

Hand off to `design/validate` when the synthesized and decomposed design artifacts appear coherent enough for readiness review.

## TODO

- Add audience-aware language guidance for architecture-review versus stakeholder-summary contexts.
