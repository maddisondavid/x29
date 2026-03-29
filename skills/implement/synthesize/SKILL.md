---
name: "x29-implement-synthesize"
description: "Use for the implement stage when execution notes need to be rolled up into a concise implementation summary for reviewers or stakeholders."
---

# Implement / Synthesize

## Purpose

Produce a concise implementation rollup for stakeholders from execution notes and unresolved issues.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `05-execute/` files
- optional audience target

## Expected Outputs

- a short summary of what was delivered, what remains open, and what to review next

## May Read

- all files under `05-execute/`
- `04-plan/value-slices.md`

## May Write

- `05-execute/implementation-notes.md`

## Must Not Do

- hide unresolved issues
- replace detailed execution records with a polished summary

## Handoff

Hand off to `implement/verify` if synthesis exposes weak evidence or incomplete closure.

## TODO

- Add audience-specific rollout and handoff summary formats.
