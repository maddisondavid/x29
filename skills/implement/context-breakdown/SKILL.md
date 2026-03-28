# Implement / Context Breakdown

## Purpose

Orient execution by summarizing what slice is being implemented, what supporting context exists, and what unresolved issues may affect the work.

## Expected Inputs

- current `05-execute/` files
- relevant `04-plan/` artifacts
- any active `human:` comments affecting execution

## Expected Outputs

- a grounded execution summary
- explicit blockers or uncertainty captured before code changes accelerate
- a recommendation for the next execution or verification pass

## May Read

- all files under `04-plan/`
- all files under `05-execute/`
- adjacent stage summaries where needed for traceability

## May Write

- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`

## Must Not Do

- start coding blindly from partial context
- ignore unresolved scope or sequencing questions
- rewrite planning documents as a substitute for implementation notes

## Handoff

Hand off to `implement/execute` when the current slice and constraints are clear enough to act.

## TODO

- Add stronger support for execution kickoff against partially complete plans.
