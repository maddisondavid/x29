---
name: "x29-define-validate"
description: "Use for the define stage when checking whether the current definition artifacts are ready to move into design."
---

# Define / Validate

## Purpose

Check whether the `define` stage is ready to progress. This is a readiness gate, not a document beautification pass.

Apply a conservative gate. Do not recommend moving into Design unless the major Define areas are materially complete and the open questions are complete, resolved, or clearly marked as non-blocking for Design.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- completed or partially completed `01-define/` artifacts
- any `human:` comments that indicate unresolved concerns

## Expected Outputs

- a readiness judgment: ready, conditionally ready, or not ready
- explicit blocker list if not ready
- focused recommendations for the next pass

## Validation Standard

Recommend moving to Design only when all of the following are true:

- the major Define areas are present and materially complete
- scope, description, risks, and acceptance criteria do not materially contradict each other
- major gaps are not hidden behind vague placeholders or empty sections
- open questions have been completed, resolved, or explicitly classified as non-blocking for Design
- `human:` comments do not contain unresolved concerns that would materially weaken Design work

Treat these areas as major Define areas:

- summary
- scope
- description
- risks
- open questions
- acceptance criteria

If one or more major areas are missing, thin, contradictory, or obviously incomplete, do not recommend moving to Design.

If open questions remain and they materially affect scope, stakeholder intent, constraints, risks, workflows, data contracts, serviceability, observability, security, or performance expectations, do not recommend moving to Design.

## May Read

- all files under `01-define/`

## May Write

- `01-define/open-questions.md`
- a short readiness note appended to `01-define/summary.md`

## Must Not Do

- silently repair major gaps and then mark the stage ready
- skip contradictory statements across documents
- recommend `design` when major areas are incomplete
- recommend `design` when open questions are still materially unresolved
- advance to `design` without saying why the stage is ready

## Handoff

Hand off to `design/context-breakdown` only when the definition is complete enough to support solution exploration without major unresolved definition gaps.

## TODO

- Add stronger validation criteria for regulated or high-risk domains.
- Add a lightweight distinction between blocking versus explicitly non-blocking open questions.
