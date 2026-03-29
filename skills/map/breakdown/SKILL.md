---
name: "x29-map-breakdown"
description: "Use for the map stage when Design is complete and the team needs a first-pass `03-map/` package that translates design intent into component-level change impact, persona flows, and inter-component contracts without drifting into planning or implementation."
---

# Map / Breakdown

## Purpose

Create the first structured `03-map/` package for a capability by translating completed Design outputs into explicit software change impact artifacts.

This skill focuses on mapping, not implementation. It converts Design intent into reviewable component changes, contracts, and persona flows while preserving uncertainty.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- a capability folder or capability identifier
- materially complete Design artifacts under `02-design/` or `design/`
- system architecture context under `system-architecture/`
- current codebase structure and module boundaries
- optional notebook context when it clarifies Design intent
- inline `human:` annotations that constrain mapping assumptions

Design files may vary in naming. Read the full Design package rather than requiring one exact filename.

## Expected Outputs

Create or update a first-pass `03-map/` package with small, reviewable files:

- `03-map/00-overview.md`
- `03-map/01-component-index.md`
- `03-map/02-open-questions.md`
- `03-map/03-control-and-data-paths.md`
- `03-map/persona-flows/00-persona-index.md`
- `03-map/persona-flows/<persona-name>-<flow-name>.md`
- `03-map/contracts/component-contract-index.md`
- `03-map/contracts/<contract-name>.md`
- `03-map/components/<component-name>.md`

## Workflow

1. Confirm capability directory and stage readiness.
2. Read all relevant Design artifacts.
3. Read `system-architecture/` for intended boundaries and interaction shape.
4. Inspect repository structure to identify current components, modules, and ownership hints.
5. Derive impacted components from Design intent and architecture/code grounding.
6. Classify each impacted component as `add`, `modify`, or `delete`.
7. Draft one file per impacted component under `03-map/components/`.
8. Extract inter-component interactions into explicit contract files under `03-map/contracts/`.
9. Expand high-level workflows into detailed persona-level flow files under `03-map/persona-flows/`.
10. Produce a high-level control/data path diagram in `03-map/03-control-and-data-paths.md` where relevant and supported by Design evidence.
11. Capture UI touchpoints and wireframe implications where visible from Design.
12. Record unresolved ambiguity in `03-map/02-open-questions.md` instead of assuming.
13. Run the checklist in `references/map-breakdown-checklist.md` before handoff.

## Mapping Rules

- Prefer explicit evidence from Design, architecture docs, and repository structure.
- Do not invent missing technical details.
- Do not silently choose one interpretation when Design is ambiguous.
- Mark assumptions as assumptions.
- Move unresolved uncertainty into open questions.
- Keep map artifacts scoped to software change impact and user/system flow translation.
- Keep files concise and independently reviewable.
- Include a high-level control/data path diagram when Design implies non-trivial multi-component interactions.

## Component Classification Rules

Each impacted component must be classified as exactly one of:

- `add`
- `modify`
- `delete`

If classification is uncertain, state the uncertainty explicitly and add an open question.

## Persona Flow Rules

Persona flows must stay at mapping level (not implementation level) and include:

- persona
- goal
- trigger
- preconditions
- main flow
- alternate/branch flows
- exception/failure flows
- systems/components involved
- data exchanged
- control touchpoints
- UI touchpoints and wireframe implications where visible
- assumptions
- open questions

## Contract Rules

Each contract file should capture:

- participating components
- purpose
- data exchanged
- control flow / invocation pattern
- responsibilities
- known failure/error considerations
- assumptions
- open questions

Contracts are map-level interaction artifacts, not detailed implementation specifications.

## Component File Minimum Content

Each `03-map/components/<component-name>.md` file should include:

- component name
- current role in system
- required change type (`add` / `modify` / `delete`)
- why affected
- expected behavioral change
- interface/API change notes
- data model/storage change notes
- upstream/downstream dependencies
- observability/serviceability implications (if visible)
- linked persona flows
- UI/wireframe implications (if relevant)
- risks/tricky areas
- open questions

## May Read

- `01-define/**/*.md`
- `define/**/*.md`
- `02-design/**/*.md`
- `design/**/*.md`
- `03-map/**/*.md`
- `system-architecture/**/*`
- source code and module directories needed to ground component boundaries
- `notebook/**/*.md`
- capability-level `README.md`
- workspace-level `x29.md`

## May Write

- `03-map/00-overview.md`
- `03-map/01-component-index.md`
- `03-map/02-open-questions.md`
- `03-map/03-control-and-data-paths.md`
- `03-map/persona-flows/00-persona-index.md`
- `03-map/persona-flows/*.md`
- `03-map/contracts/component-contract-index.md`
- `03-map/contracts/*.md`
- `03-map/components/*.md`

## Must Not Do

- generate code
- write implementation tasks
- create delivery slices
- produce implementation-level specs
- resolve design ambiguity by assumption
- redesign the capability from scratch
- suppress uncertainty that affects planning readiness

## Incomplete or Ambiguous Information

When Design or architecture detail is incomplete:

- produce the smallest credible first-pass map package
- mark unknowns explicitly in component/contract/flow docs
- capture unresolved issues in `03-map/02-open-questions.md`
- add realistic `TODO:` markers where refinement is expected
- ask focused follow-up questions only when ambiguity blocks credible mapping

Do not fabricate certainty to make the package appear complete.

## Quality Gate

Before handoff, verify:

- every impacted component has its own file and change classification
- component index matches component files
- persona index matches persona flow files
- contract index matches contract files
- control/data path diagram is present when relevant and does not invent missing behavior
- open questions capture unresolved boundaries/ownership/contracts/flow behavior
- no planning slices or implementation instructions are present

Use: `references/map-breakdown-checklist.md`.

## Handoff

Hand off to `map/refine` when one area needs deeper analysis.

Hand off to `map/validate` when component impact, contracts, and persona flow coverage are materially complete for readiness review.

## TODO

- Add lightweight templates for component, contract, and persona-flow file stubs.
- Add guidance for mapping large multi-repo capabilities with shared platform ownership.
