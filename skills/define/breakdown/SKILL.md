---
name: "x29-define-breakdown"
description: "Use for the define stage when rough product-manager intent needs to be turned into the first structured `01-define/` package. Use when Codex should inspect loose notebook or notes files, ground itself in available architecture context, create small reviewable Define artifacts, and surface assumptions, ambiguity, and open questions without drifting into design, mapping, planning, or implementation."
---

# Define / Context Breakdown

## Purpose

Create the first structured `01-define/` package for a capability from rough PM intent, loose notebook material, and available architecture context.

Treat this as an initial reviewable draft, not a final definition pass. Preserve ambiguity where the source material is weak.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Expected Inputs

- a capability folder or capability identifier
- rough PM notes or stated product intent
- optional loose notebook material under directories such as `notebook/` or `notes/`
- relevant architecture, platform, domain, or operating-context documents
- any existing capability README or prior definition material
- inline `human:` annotations when present

## Expected Outputs

- a first-pass Define package under `01-define/`
- explicit assumptions, uncertainty, and open questions recorded in the package
- acceptance criteria split into concern-specific files under `01-define/acceptance-criteria/`
- targeted follow-up questions grounded in the available architecture and platform context

Create or update these files:

- `01-define/00-summary.md`
- `01-define/01-scope.md`
- `01-define/02-description.md`
- `01-define/03-risks.md`
- `01-define/04-open-questions.md`
- `01-define/acceptance-criteria/functional.md`
- `01-define/acceptance-criteria/serviceability.md`
- `01-define/acceptance-criteria/observability.md`
- `01-define/acceptance-criteria/security.md`
- `01-define/acceptance-criteria/performance-scale.md`
- `01-define/acceptance-criteria/operability-support.md`
- `01-define/acceptance-criteria/ux-workflow.md`
- `01-define/acceptance-criteria/data-contracts.md`
- `01-define/acceptance-criteria/hardware.md`

## Workflow

1. Confirm the capability folder in scope.
2. Inspect likely loose-input directories first:
   - `notebook/`
   - `notes/`
   - other lightweight note-holding directories if they are obvious from the capability layout
3. Prefer `capability-definition-notes.md` as the primary seed file when it exists.
4. Inspect other notebook or notes files only when they appear relevant to product intent, stakeholder input, constraints, or prior decisions.
5. Read relevant architecture or platform context before drafting:
   - capability-level `README.md`
   - workspace-level `x29.md`
   - `system-architecture/` within the current workspace as the primary architecture context location
   - nearby architecture or platform documents when `system-architecture/` is incomplete
   - adjacent stage summaries only when they already exist and materially help frame definition constraints
6. Derive an initial Define package that separates:
   - summary
   - scope and boundaries
   - fuller description
   - initial risks
   - open questions
   - acceptance criteria by concern area
7. Record assumptions explicitly.
8. Record uncertainty explicitly inside the affected file instead of flattening it into fake certainty.
9. Ask follow-up questions when ambiguity blocks a credible first draft or when architecture context reveals likely constraints.

## Notebook and Notes Handling

Treat notebook or notes files as loose human input, not as the structured source of truth for the Define stage.

If `capability-definition-notes.md` exists:

- use it as the primary product-intent seed
- preserve its roughness unless the user asked for cleanup
- pull supporting detail from other relevant note files only when helpful

If notebook or notes directories exist but no clear seed file exists:

- inspect the most obviously relevant files for intent, stakeholder input, constraints, or workflow clues
- create `capability-definition-notes.md` only if a stable seed note is missing and new intent is being established

If no suitable notes exist:

- ask the human for the initial capability intent
- create `capability-definition-notes.md` in the most obvious lightweight notes location
- record the human-provided starting intent there for continuity
- then create the structured `01-define/` outputs

If no notebook or notes directory exists:

- work from user-provided intent and available architecture context
- create a lightweight notes directory only when needed to store a new `capability-definition-notes.md`

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

If architecture context is weak or missing, say so explicitly in `01-define/03-risks.md` and `01-define/04-open-questions.md`.

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

Keep acceptance criteria split by concern area under `01-define/acceptance-criteria/`.

Populate only categories that are relevant, but keep the full structure present. If a category is not yet applicable or lacks enough information, create the file with `TODO:` and a short reason.

For `acceptance-criteria/hardware.md`, call out device, firmware, sensor, edge gateway, on-prem appliance, or deployment-environment expectations when applicable. If no hardware changes are expected, keep the file and record `TODO:` with a short note such as "No hardware changes identified in current Define scope."

Use the checklist in [references/pm-notes-review-checklist.md](references/pm-notes-review-checklist.md) to probe for gaps before drafting acceptance criteria.

When requirements are unclear, record the uncertainty inside the relevant acceptance-criteria file instead of silently omitting it.

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
- `notes/**/*.md`
- `01-define/**/*.md`
- nearby architecture, platform, or reference documents relevant to the capability
- adjacent stage artifacts only when already present and needed to avoid misframing the Define draft

## May Write

- `01-define/00-summary.md`
- `01-define/01-scope.md`
- `01-define/02-description.md`
- `01-define/03-risks.md`
- `01-define/04-open-questions.md`
- `01-define/acceptance-criteria/*.md`
- `notebook/capability-definition-notes.md`
- `notes/capability-definition-notes.md`

## Must Not Do

- present guesses as confirmed facts
- skip notebook or notes discovery when loose inputs may already exist
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
- capture unresolved questions in `01-define/04-open-questions.md`
- leave `TODO:` markers where later refinement is required
- state when architecture grounding is weak or absent

Do not block unnecessarily, but do not fabricate confidence.

## Handoff

Hand off to `define/refine` when one section or concern area needs deeper treatment.

Hand off to `define/validate` only after the first-pass package has been reviewed and major ambiguity has been made explicit.

## TODO

- Refine heuristics for picking the most likely loose-notes directory when several exist.
- Add a lightweight prompt pattern for bootstrapping from scratch when no seed notes exist.
