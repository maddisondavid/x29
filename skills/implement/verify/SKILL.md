# Implement / Verify

## Purpose

Check whether the current implementation slice is actually ready, including correctness signals, unresolved issues, and alignment with the plan.

## Expected Inputs

- current implementation notes
- unresolved issue list
- any available verification evidence such as tests, review notes, or observed behavior

## Expected Outputs

- a verification judgment
- explicit defects, gaps, or follow-up work
- a recommendation to continue implementation, fix issues, or synthesize results

## May Read

- all files under `04-plan/`
- all files under `05-execute/`
- relevant code and verification artifacts

## May Write

- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`

## Must Not Do

- equate incomplete verification with success
- close unresolved issues without evidence
- rewrite history to make the slice appear cleaner than it is

## Handoff

Hand off back to `implement/execute` for follow-up work, or to `implement/synthesize` when the slice is complete enough for stakeholder communication.

## TODO

- Add explicit verification patterns for code review, test evidence, and rollout readiness.
