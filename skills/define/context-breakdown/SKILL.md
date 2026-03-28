---
name: "x29-define-context-breakdown"
description: "Use for the define stage when the next task is to summarize current intent, scope, assumptions, and open questions without inventing missing detail."
---

# Define / Context Breakdown

## Purpose

Establish the current state of the `define` stage by summarizing known intent, scope, constraints, assumptions, and open questions without prematurely inventing detail.

## Expected Inputs

- a capability folder
- existing files under `01-define/`
- relevant inline `human:` annotations
- optional upstream business or product context supplied by the user

## Expected Outputs

- a concise status-oriented update to `01-define/summary.md`
- explicit gaps or ambiguities called out in `01-define/open-questions.md`
- clear notes about what should be refined next

## May Read

- `01-define/*.md`
- capability-level `README.md`
- adjacent stage summaries only when needed for orientation

## May Write

- `01-define/summary.md`
- `01-define/open-questions.md`
- small clarifying edits to `01-define/assumptions.md`

## Must Not Do

- invent implementation detail
- convert unresolved ambiguity into false certainty
- skip over `human:` comments
- advance the capability into the next stage

## Handoff

Hand off to `define/refine` when one area needs deeper treatment.
Hand off to `define/validate` when the stage appears materially complete.

## TODO

- Refine heuristics for lightweight versus fuller definition passes.
