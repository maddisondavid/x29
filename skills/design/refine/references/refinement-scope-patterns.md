# Design Refine Scope Patterns

Use these patterns to keep each refinement pass bounded and reviewable.

## Minimal Scope Pass

Use when one file is thin but the rest of the package is stable.

- read: `02-decision.md`, one supporting file, relevant Define source
- write: one target file only
- out of scope: all other design concerns

## Decision Clarification Pass

Use when decision status or rationale is unclear.

- read: `01-options-considered.md`, `02-decision.md`, `04-risks-and-tradeoffs.md`
- write: `02-decision.md` (and optionally `04-risks-and-tradeoffs.md`)
- out of scope: blueprint expansion and rollout sequencing detail

## Tradeoff Deepening Pass

Use when options exist but consequences are under-specified.

- read: `01-options-considered.md`, `04-risks-and-tradeoffs.md`, selected lens guidance
- write: `01-options-considered.md`, `04-risks-and-tradeoffs.md`
- out of scope: large structural rewrites of the blueprint

## Blueprint Coherence Pass

Use when design direction is chosen but `03-solution-blueprint.md` is incomplete.

- read: `02-decision.md`, `03-solution-blueprint.md`, relevant Define constraints
- write: `03-solution-blueprint.md`
- out of scope: adding new alternatives unless a direct contradiction is found

## Open Questions Hygiene Pass

Use when unresolved issues are scattered or hidden.

- read: all `02-design/` files
- write: `05-open-questions.md` plus minimal updates to source files for traceability
- out of scope: creating net-new design direction without evidence
