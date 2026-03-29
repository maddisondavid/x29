---
name: "x29-define-breakdown"
description: "Use for the define stage when rough product-manager intent needs to be turned into the first structured `01-define/` package. Use when Codex should inspect loose notebook files, ground itself in available architecture context, create small reviewable Define artifacts, and surface assumptions, ambiguity, and open questions without drifting into design, mapping, planning, or implementation."
---

# Define / Breakdown

## Purpose

Create the first structured `01-define/` package for a capability from rough PM intent, loose notebook material, and available architecture context.

Treat this as an initial reviewable draft, not a final definition pass. Preserve ambiguity where the source material is weak.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- a capability folder or capability identifier
- rough PM notes or stated product intent
- optional loose notebook material under directories such as `notebook/`
- relevant architecture, platform, domain, or operating-context documents
- any existing capability README or prior definition material
- inline `human:` annotations when present

## Expected Outputs

- a first-pass Define package under `01-define/`
- explicit assumptions, uncertainty, and open questions recorded in the package
- acceptance criteria captured in a reviewable `01-define/acceptance-criteria.md` file
- targeted follow-up questions grounded in available architecture and platform context

Create or update these files:

- `01-define/summary.md`
- `01-define/assumptions.md`
- `01-define/acceptance-criteria.md`
- `01-define/open-questions.md`
- `01-define/hardware.md`

## Workflow

1. Confirm the capability folder in scope.
2. Inspect `notebook/` first for loose human input.
3. Prefer `capability-definition-notes.md` as the primary seed file when it exists.
4. Inspect other notebook files only when they appear relevant to product intent, stakeholder input, constraints, or prior decisions.
5. Read relevant architecture or platform context before drafting:
   - capability-level `README.md`
   - workspace-level `x29.md`
   - `system-architecture/` within the current workspace as the primary architecture context location
   - nearby architecture or platform documents when `system-architecture/` is incomplete
   - adjacent stage summaries only when they already exist and materially help frame definition constraints
6. Derive an initial Define package that captures summary, assumptions, acceptance criteria, open questions, and hardware expectations.
7. Record assumptions explicitly.
8. Record uncertainty explicitly inside the affected file instead of flattening it into fake certainty.
9. Ask follow-up questions when ambiguity blocks a credible first draft or when architecture context reveals likely constraints.

## Notebook Handling

Treat notebook files as loose human input, not as the structured source of truth for the Define stage.

If `capability-definition-notes.md` exists:

- use it as the primary product-intent seed
- preserve its roughness unless the user asked for cleanup
- pull supporting detail from other relevant note files only when helpful

If `notebook/` exists but no clear seed file exists:

- inspect the most obviously relevant files for intent, stakeholder input, constraints, or workflow clues
- create `capability-definition-notes.md` only if a stable seed note is missing and new intent is being established

If no suitable notebook notes exist:

- ask the human for the initial capability intent
- create `notebook/capability-definition-notes.md`
- record the human-provided starting intent there for continuity
- then create the structured `01-define/` outputs

If no notebook directory exists:

- work from user-provided intent and available architecture context
- create `notebook/` when needed to store a new `capability-definition-notes.md`

## Architecture Grounding

Before writing the Define package, inspect available architecture and platform context to identify:

- likely constraints
- terminology that should be preserved
- likely integration or dependency edges
- serviceability or observability expectations
- security or compliance expectations
- probable workflow or data-contract touchpoints
- places where the PM intent may clash with existing platform expectations

In this workspace, look under `system-architecture/` first for architecture grounding.

If architecture context is weak or missing, say so explicitly in `01-define/summary.md` and `01-define/open-questions.md`.

## Writing Rules

- prefer concise, reviewable markdown
- use headings and bullets when they improve scanability
- keep files small and focused
- mark assumptions clearly
- mark uncertainty clearly
- preserve `human:` annotations
- distinguish confirmed facts from inferred guidance
- use `TODO:` markers where later refinement is expected

## Acceptance Criteria Rules

Keep acceptance criteria in `01-define/acceptance-criteria.md`.

Use concern-focused sections inside that file (for example: functional, serviceability, observability, security, performance-scale, operability-support, ux-workflow, and data-contracts) and mark missing detail with explicit `TODO:` notes.

Use `01-define/hardware.md` for device, firmware, sensor, edge gateway, on-prem appliance, or deployment-environment expectations. If no hardware changes are expected, keep the file and record a clear note such as "No hardware changes identified in current Define scope."

Use the checklist in [references/pm-notes-review-checklist.md](references/pm-notes-review-checklist.md) to probe for gaps before drafting acceptance criteria.

When requirements are unclear, record the uncertainty in `01-define/acceptance-criteria.md` instead of silently omitting it.

## Follow-Up Questions

Ask focused questions when needed, especially around:

- unclear scope boundaries
- stakeholder coverage
- operational ownership or support expectations
- observability and serviceability expectations
- security, privacy, or compliance constraints
- performance, load, or scale expectations
- workflow impacts
- data contracts, APIs, or system-of-record implications

Questions should be grounded in the architecture and platform context that was actually found. Do not ask generic filler questions that ignore the repository context.

## May Read

- `system-architecture/**/*.md`
- `system-architecture/**/*`
- capability-level `README.md`
- workspace-level `x29.md`
- `notebook/**/*.md`
- `01-define/**/*.md`
- nearby architecture, platform, or reference documents relevant to the capability
- adjacent stage artifacts only when already present and needed to avoid misframing the Define draft

## May Write

- `01-define/summary.md`
- `01-define/assumptions.md`
- `01-define/acceptance-criteria.md`
- `01-define/open-questions.md`
- `01-define/hardware.md`
- `notebook/capability-definition-notes.md`

## Must Not Do

- present guesses as confirmed facts
- skip notebook discovery when loose inputs may already exist
- treat notebook material as the final Define source of truth
- produce detailed architecture design
- map components or code changes
- create delivery slices or rollout plans
- generate implementation specifications or code
- advance the capability into `02-design/`, `03-map/`, `04-plan/`, or `05-execute/`

## Incomplete Information

When information is incomplete:

- build the smallest credible first draft
- record assumptions explicitly
- record uncertainty explicitly
- capture unresolved questions in `01-define/open-questions.md`
- leave `TODO:` markers where later refinement is required
- state when architecture grounding is weak or absent

Do not block unnecessarily, but do not fabricate confidence.

## Handoff

Hand off to `define/refine` when one section or concern area needs deeper treatment.

Hand off to `define/validate` only after the first-pass package has been reviewed and major ambiguity has been made explicit.

## TODO

- Refine heuristics for prioritizing high-signal notebook inputs when several files exist.
- Add a lightweight prompt pattern for bootstrapping from scratch when no seed notes exist.
