---
name: "x29-define-refine"
description: "Use for the define stage when an existing Define package needs to be improved one area at a time from a selected role or perspective. Use when Codex should inspect current Define artifacts and notebook notes, ask which refinement role to adopt, load the matching role reference, announce the exact file scope before editing, and make bounded Define-only updates without drifting into design, mapping, planning, or implementation."
---

# Define / Refine

## Purpose

Refine an existing Define package one area at a time from a chosen role or perspective.

This is a Define-stage skill only. It improves the current package in reviewable chunks and does not attempt to regenerate the whole definition in one pass.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Interaction Flow

1. Ask for the capability identifier or capability folder.
2. Inspect the current Define package and relevant notebook material.
3. Ask which role or perspective should be active for this pass.
   - If the user asks what roles are available, provide the supported-role list before asking them to choose.
4. Load the matching role file from [references/roles/](references/roles/).
5. Before editing, tell the user:
   - the active role
   - which Define files will be read
   - which Define files may be updated
   - what is out of scope for this pass
6. Refine only the relevant Define artifacts.
7. Preserve uncertainty and unresolved issues explicitly.
8. Hand off to another Define refinement pass or `define/validate` only when appropriate.

## Supported Roles

Use exactly one active role per pass unless the user explicitly asks to chain another pass afterward.

- `product-intent`
- `scope-boundaries`
- `stakeholders-workflows`
- `serviceability`
- `observability`
- `security`
- `performance-scale`
- `operability-support`
- `ux-workflow`
- `data-contracts`
- `hardware`

Load the role guidance from these files:

- [references/roles/product-intent.md](references/roles/product-intent.md)
- [references/roles/scope-boundaries.md](references/roles/scope-boundaries.md)
- [references/roles/stakeholders-workflows.md](references/roles/stakeholders-workflows.md)
- [references/roles/serviceability.md](references/roles/serviceability.md)
- [references/roles/observability.md](references/roles/observability.md)
- [references/roles/security.md](references/roles/security.md)
- [references/roles/performance-scale.md](references/roles/performance-scale.md)
- [references/roles/operability-support.md](references/roles/operability-support.md)
- [references/roles/ux-workflow.md](references/roles/ux-workflow.md)
- [references/roles/data-contracts.md](references/roles/data-contracts.md)
- [references/roles/hardware.md](references/roles/hardware.md)

Use [references/refinement-scope-patterns.md](references/refinement-scope-patterns.md) when framing the pre-edit scope announcement.

## Expected Inputs

- a capability folder or capability identifier
- an existing Define package under `01-define/` or `define/`
- optional notebook context such as:
  - `notebook/capability-definition-notes.md`
  - `notebook/meeting-notes.md`
  - `notebook/stakeholder-feedback.md`
- optional additional notes under `notebook/`
- relevant `human:` markup in the Define files
- a selected refinement role

## Expected Outputs

- one bounded refinement pass against the current Define package
- improved clarity in the role-relevant Define files
- explicit assumptions, uncertainty, and unresolved questions preserved in-file
- a clear note about what remains open or what Define area should be refined next

## Repository Layout Assumption

Prefer the numbered X29 stage layout:

- `01-define/`

Be tolerant of capability folders that use:

- `define/`

Read and write within whichever Define directory is actually present. Do not normalize the repository structure unless the user asks for that separately.

## Notebook Handling

Notebook files are loose context, not the structured source of truth.

Inspect notebook files when they are relevant to the active role, especially:

- `notebook/capability-definition-notes.md`
- `notebook/meeting-notes.md`
- `notebook/stakeholder-feedback.md`

Use notebook material to clarify intent, decisions, stakeholder feedback, or unresolved concerns. Do not rewrite notebook files unless the user explicitly asks.

## `human:` Markup

Treat inline `human:` markup in relevant files as priority refinement input.

When `human:` comments are present:

- treat them as explicit review requests or constraints
- resolve them in context where possible
- preserve unresolved concerns as explicit open questions or uncertainty notes
- do not silently delete unresolved intent

## File Scope Announcement

Before making edits, clearly tell the user:

- `Active role: <role>`
- `I will read:`
- a bullet list using filenames only, for example `assumptions.md` or `open-questions.md`
- `I may update:`
- a bullet list using filenames only, for example `acceptance-criteria.md`
- `Out of scope for this pass: ...`

Keep the write scope narrow. Only name files that are plausibly relevant to the chosen role and the current package state.

## Writing Rules

- prefer concise markdown
- keep changes small and reviewable
- preserve file decomposition instead of collapsing work into one large document
- mark assumptions clearly
- mark uncertainty clearly
- never present guesses as confirmed facts
- do not rewrite unrelated files
- do not make broad edits outside the active role scope

## Incomplete Information

When information is incomplete:

- improve only what can be grounded in the existing Define package and notebook context
- preserve unresolved ambiguity explicitly
- add or update `04-open-questions.md` when the gap needs review
- leave `TODO:` markers where later Define refinement is needed
- say when the active role lacks enough source material to confidently sharpen the package

Do not block unnecessarily, but do not flatten ambiguity into false certainty.

## May Read

- `system-architecture/**/*`
- `01-define/**/*.md`
- `define/**/*.md`
- `notebook/**/*.md`
- capability-level `README.md`
- workspace-level `x29.md`
- the selected role file under `references/roles/`
- [references/refinement-scope-patterns.md](references/refinement-scope-patterns.md)

## May Write

- files inside `01-define/`
- files inside `define/`

Typical updates are limited to:

- `summary.md`
- `assumptions.md`
- `acceptance-criteria.md`
- `open-questions.md`
- `hardware.md`

## Must Not Do

- produce architecture design
- map software component changes
- create delivery slices
- create implementation specs
- generate code
- move work into Design, Map, Plan, or Implement
- rewrite the entire Define package when only one role-focused pass is needed

## Handoff

Hand off to another `define/refine` pass when a different role or concern area still needs attention.

Hand off to `define/validate` only when the Define package looks materially coherent and remaining open questions are explicit rather than hidden.

## TODO

- Add stronger heuristics for choosing the minimum safe write scope from the active role.
- Add lightweight examples showing how to phrase the scope announcement for sparse versus fuller Define packages.
