# Internal Routing and Skill Catalog Rules

This document defines how internal `x29-*` skills should be authored for reliable orchestration.

## Skill Naming

Use flat names:

- `x29-define-breakdown`
- `x29-design-refine`
- `x29-map-validate`
- `x29-plan-synthesize`
- `x29-implement-verify`

## Required Skill Description Contract

Each `SKILL.md` must explicitly state:

- stage and mode ownership
- trigger requests
- problem solved
- file read scope
- file write scope
- must-not-do constraints
- common lenses (if relevant)
- done criteria

These fields are mandatory because orchestration quality depends on them.

## Lenses vs Skills

- **Lenses:** perspective selection for reasoning quality.
- **Skills:** execution mechanism selected by routing.

Lenses should never be exposed as a giant mandatory user menu.

## Artifact Sensitivity

Routing should account for:

- missing or partial stage artifacts
- unresolved inline `human:` comments
- stage folder structure (`01-define`..`05-execute`)
- notebook presence and quality

## Handoff Guidance

Skills should propose likely next actions, but must not auto-advance stages silently.

## TODO

- Add machine-readable skill metadata schema for future routing engines.
- Add confidence-based fallback behavior when stage detection is ambiguous.
