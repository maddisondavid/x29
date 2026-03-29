---
name: "x29-define-synthesize"
description: "Use for the define stage when the decomposed Define package needs to be rolled up into a root-level `capability-definition.md` document for stakeholder review without losing important uncertainty. Use when Codex should synthesize current Define artifacts into a single ordered summary, preserve caveats, and version any existing `capability-definition.md` before writing the new one."
---

# Define / Synthesize

## Purpose

Produce a root-level `capability-definition.md` file for the current capability by synthesizing the decomposed Define artifacts into a cleaner stakeholder-facing document.

This is a synthesis pass, not a refinement or validation pass. Preserve uncertainty and traceability back to the underlying Define files.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- current Define files under `01-define/` or `define/`
- optional notebook context when it helps explain unresolved intent
- optional target audience such as product leadership, engineering, or delivery

## Expected Outputs

- a root-level `capability-definition.md` file inside the capability folder
- preserved uncertainty, assumptions, and unresolved issues reflected in the synthesized document
- older root-level definition file versioned before replacement when one already exists

Use the structure from [references/capability-definition-template.md](references/capability-definition-template.md).

## Output File Rules

Write the synthesized document to:

- `capability-definition.md`

If `capability-definition.md` already exists:

- rename the existing file before writing the new one
- use the versioned pattern `capability-definition-VXXXX.md`
- use a zero-padded four-digit version number such as `V0001`, `V0002`, and so on
- choose the next available version number rather than overwriting an older versioned file

Then write the new synthesis to `capability-definition.md`.

## Required Section Order

The synthesized output must contain these sections in this order:

1. `Summary`
2. `Scope`
3. `Open Questions`
4. `Risks`
5. `Acceptance Critiera`

Use the bundled template as the default structure. Preserve the section order even when a section is brief.

## Synthesis Behavior

- read the current Define package first
- synthesize from structured Define files before pulling from notebook files
- use notebook material only when it helps clarify intent or preserve unresolved context
- keep the source Define files as the detailed working set
- keep the synthesized file readable and stakeholder-facing
- preserve important uncertainty instead of smoothing it away
- keep `human:` intent visible in the synthesis where it materially affects understanding

## May Read

- all files under `01-define/`
- all files under `define/`
- `notebook/**/*.md`
- [references/capability-definition-template.md](references/capability-definition-template.md)

## May Write

- `capability-definition.md`
- `capability-definition-VXXXX.md`

## Must Not Do

- overwrite an existing `capability-definition.md` without versioning it first
- overwrite detailed Define working files with the synthesized rollup
- erase disagreement, caveats, uncertainty, or `human:` intent from the synthesis
- drift into Design, Map, Plan, or Implement work

## Incomplete Information

When the Define package is incomplete:

- still produce the best available synthesis if the user wants one
- state uncertainty clearly in the relevant section
- preserve unresolved items in `Open Questions`
- avoid turning weak source material into false certainty

## Handoff

Hand off to `define/refine` if synthesis exposes specific clarity gaps that need another bounded Define pass.

Hand off to `define/validate` when the Define package and synthesized definition look coherent enough for a readiness check.

## TODO

- Add audience-aware tone guidance without changing the required section order.
