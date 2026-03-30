---
name: "x29-design-validate"
description: "Use for the design stage when checking whether the proposed solution is coherent enough to progress into impact mapping."
---

# Design / Validate

## Purpose

Check whether the Design stage is ready to move into `map`. This is a readiness gate, not a document beautification pass.

Apply a conservative gate. Do not recommend moving into Map unless the major Design areas are materially complete, traceable to Define constraints, and major tradeoffs are explicit.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- completed or partially completed `02-design/` artifacts
- relevant `01-define/` artifacts
- any `human:` comments that indicate unresolved design concerns

## Expected Outputs

- a readiness judgment: ready, conditionally ready, or not ready
- explicit blocker list if not ready
- focused recommendations for the next refinement pass

## Validation Standard

Recommend moving to Map only when all of the following are true:

- the major Design areas are present and materially complete
- design direction is traceable to Define scope, acceptance criteria, and constraints
- options, decision rationale, and blueprint details do not materially contradict each other
- major gaps are not hidden behind placeholders or vague language
- open design questions are resolved or explicitly classified as non-blocking for impact mapping
- `human:` comments do not contain unresolved concerns that materially weaken downstream mapping

Treat these as major Design areas:

- summary
- options considered
- decision
- solution blueprint
- risks and tradeoffs
- open questions
- hardware considerations

If one or more major areas are missing, thin, contradictory, or incomplete, do not recommend moving to Map.

If open questions materially affect architecture shape, interfaces, data, security, operability, observability, performance, migration posture, or hardware topology/dependencies, do not recommend moving to Map.

## May Read

- all files under `01-define/`
- all files under `02-design/`

## May Write

- `02-design/05-open-questions.md`
- a short readiness note appended to `02-design/02-decision.md`

## Must Not Do

- silently repair major gaps and then mark stage ready
- ignore contradictions between Define and Design
- recommend `map` when major design concerns remain materially unresolved
- invent missing design details during validation without saying so

## Handoff

Hand off to `design/refine` when design is not ready and the missing work can be addressed in bounded lens-focused passes.

Hand off to `map/breakdown` only when design is coherent enough to analyze component and dependency impact.

## TODO

- Add a lightweight rubric for distinguishing blocking versus non-blocking design open questions.
