---
name: "x29-design-breakdown"
description: "Use for the design stage when Define is ready and the team needs a first structured `02-design/` package that captures options, decision direction, blueprint shape, and key tradeoffs without drifting into map, plan, or implementation."
---

# Design / Context Breakdown

## Purpose

Create the first structured `02-design/` package for a capability from the approved Define artifacts and any available architecture context.

Treat this as an initial reviewable draft, not a final decision lock. Keep uncertainty visible where solution direction is not yet settled.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- a capability folder or capability identifier
- materially complete Define artifacts under `01-define/` or `define/`
- optional architecture and platform context
- optional notebook notes that capture early technical direction
- inline `human:` annotations that affect solution framing

## Expected Outputs

- a first-pass Design package under `02-design/`
- explicit alternatives, current decision direction, and unresolved tradeoffs
- a design blueprint that is detailed enough for later impact mapping
- open design questions made explicit rather than hidden

Create or update these files:

- `02-design/00-summary.md`
- `02-design/01-options-considered.md`
- `02-design/02-decision.md`
- `02-design/03-solution-blueprint.md`
- `02-design/04-risks-and-tradeoffs.md`
- `02-design/05-open-questions.md`
- `02-design/06-hardware.md`

## Workflow

1. Confirm the capability folder in scope.
2. Read Define artifacts first, including acceptance criteria and open questions.
3. Inspect architecture context relevant to likely service or component boundaries.
4. Inspect notebook notes only when they materially inform design direction.
5. Draft options and decision direction before writing blueprint details.
6. Make tradeoffs explicit, including why alternatives are not currently preferred.
7. Record unresolved issues and assumptions explicitly.
8. Ask focused follow-up questions if ambiguity blocks a credible first-pass design package.

## Design Grounding

Ground the draft in:

- defined scope and non-goals
- acceptance criteria by concern area
- known architecture constraints
- workflow and operability expectations
- dependency and integration assumptions

If architecture context is weak or missing, say so explicitly in `04-risks-and-tradeoffs.md` and `05-open-questions.md`.

Capture hardware implications in `06-hardware.md` when the capability depends on device, firmware, sensor, gateway, or physical deployment constraints. If no hardware impact exists, keep `06-hardware.md` with a clear `TODO:` note stating that no hardware changes are currently required.

## Writing Rules

- prefer concise, reviewable markdown
- keep files small and focused
- preserve `human:` annotations
- distinguish confirmed constraints from inferred guidance
- use `TODO:` markers where later refinement is expected
- do not turn uncertain direction into fake certainty

## Option and Decision Rules

For `01-options-considered.md`:

- include at least two plausible options when meaningful alternatives exist
- capture option shape, pros, cons, and major risks
- mark when an option is rejected, deferred, or still in play

For `02-decision.md`:

- state current decision status (`proposed`, `tentative`, `approved`, or `deferred`)
- capture rationale and traceability to Define constraints
- list what would invalidate or reopen the decision

## Follow-Up Questions

Ask focused questions when needed, especially around:

- component or service boundary ownership
- interface and contract expectations
- migration or rollout constraints
- reliability and operability expectations
- observability, security, and compliance needs
- performance and capacity expectations

## May Read

- `01-define/**/*.md`
- `define/**/*.md`
- `02-design/**/*.md`
- `system-architecture/**/*`
- `notebook/**/*.md`
- `notes/**/*.md`
- capability-level `README.md`
- workspace-level `x29.md`

## May Write

- `02-design/00-summary.md`
- `02-design/01-options-considered.md`
- `02-design/02-decision.md`
- `02-design/03-solution-blueprint.md`
- `02-design/04-risks-and-tradeoffs.md`
- `02-design/05-open-questions.md`
- `02-design/06-hardware.md`

## Must Not Do

- skip alternatives and jump straight to a preferred answer
- present guesses as settled design fact
- map concrete component impacts (Map stage)
- create delivery slices or implementation sequencing (Plan stage)
- generate implementation specs or code (Execute stage)

## Incomplete Information

When information is incomplete:

- build the smallest credible first-pass design package
- record uncertainty explicitly
- preserve unresolved questions in `05-open-questions.md`
- use `TODO:` markers for later design refinement

Do not block unnecessarily, but do not fabricate confidence.

## Handoff

Hand off to `design/refine` when one decision area needs deeper role-focused treatment.

Hand off to `design/validate` only after options, decision direction, blueprint, and tradeoffs are all materially present.

## TODO

- Add stronger heuristics for selecting option depth based on capability size.
