---
name: "x29-define-validate"
description: "Use for the define stage when checking whether the current definition artifacts are ready to move into design."
---

# Define / Validate

## Purpose

Check whether the `define` stage is ready to progress. This is a readiness gate, not a document beautification pass.

## Expected Inputs

- completed or partially completed `01-define/` artifacts
- any `human:` comments that indicate unresolved concerns

## Expected Outputs

- a readiness judgment: ready, conditionally ready, or not ready
- explicit blocker list if not ready
- focused recommendations for the next pass

## May Read

- all files under `01-define/`

## May Write

- `01-define/open-questions.md`
- a short readiness note appended to `01-define/summary.md`

## Must Not Do

- silently repair major gaps and then mark the stage ready
- skip contradictory statements across documents
- advance to `design` without saying why the stage is ready

## Handoff

Hand off to `design/context-breakdown` only when the definition is ready enough to support solution exploration.

## TODO

- Add stronger validation criteria for regulated or high-risk domains.
