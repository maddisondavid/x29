---
name: "x29-implement-execute"
description: "Use for the implement stage when carrying out a reviewable implementation slice while keeping execution notes and unresolved issues current."
---

# Implement / Execute

## Purpose

Carry out the implementation slice while keeping execution notes, unresolved issues, and handoff clarity current.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current implementation slice context
- `04-plan/` guidance and any active constraints
- codebase or delivery context supplied in the working session

## Expected Outputs

- updated implementation notes
- tracked unresolved issues
- clear signals about what should be verified next

## May Read

- all files under `04-plan/`
- all files under `05-execute/`
- code or repository areas relevant to the slice being executed

## May Write

- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`
- implementation artifacts for the slice in the target repository

## Must Not Do

- silently widen the slice
- discard unresolved issues because work has started
- treat successful code edits as equivalent to verified readiness

## Handoff

Hand off to `implement/verify` when the slice has reached a reviewable implementation state.

## TODO

- Add better conventions for linking execution notes to concrete code changes.
