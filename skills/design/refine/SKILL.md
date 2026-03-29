---
name: "x29-design-refine"
description: "Use for the design stage when an existing Design package needs a bounded refinement pass from a selected role or perspective. Use when Codex should inspect current design artifacts, ask for the active role, announce read/write scope before editing, and improve decision quality without drifting into map, plan, or implementation."
---

# Design / Refine

## Purpose

Refine an existing Design package one area at a time from a chosen role or perspective.

This is a Design-stage skill only. It improves the current package in reviewable chunks and does not regenerate the entire design in one pass.

## Capability Directory Check

Before doing stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching capability folder does not exist, stop and direct the user to run `x29 init`.

## Interaction Flow

1. Ask for the capability identifier or capability folder.
2. Inspect the current Design package and relevant Define context.
3. Ask which role or perspective should be active for this pass.
   - If the user asks what roles are available, provide the supported-role list before asking them to choose.
4. Load the matching role file from [references/roles/](references/roles/).
5. Before editing, tell the user:
   - the active role
   - which Design files will be read
   - which Design files may be updated
   - what is out of scope for this pass
6. Refine only the relevant Design artifacts.
7. Preserve uncertainty and unresolved tradeoffs explicitly.
8. Hand off to another Design refinement pass or `design/validate` only when appropriate.

## Supported Roles

Use exactly one active role per pass unless the user explicitly asks to chain another pass afterward.

- `architecture-shape`
- `interfaces-contracts`
- `data-model-state`
- `security-compliance`
- `reliability-operability`
- `observability-telemetry`
- `performance-capacity`
- `rollout-migration`

Load role guidance from:

- [references/roles/architecture-shape.md](references/roles/architecture-shape.md)
- [references/roles/interfaces-contracts.md](references/roles/interfaces-contracts.md)
- [references/roles/data-model-state.md](references/roles/data-model-state.md)
- [references/roles/security-compliance.md](references/roles/security-compliance.md)
- [references/roles/reliability-operability.md](references/roles/reliability-operability.md)
- [references/roles/observability-telemetry.md](references/roles/observability-telemetry.md)
- [references/roles/performance-capacity.md](references/roles/performance-capacity.md)
- [references/roles/rollout-migration.md](references/roles/rollout-migration.md)

Use [references/refinement-scope-patterns.md](references/refinement-scope-patterns.md) when framing the pre-edit scope announcement.

## Expected Inputs

- a capability folder or capability identifier
- an existing Design package under `02-design/` or `design/`
- upstream Define context under `01-define/` or `define/`
- optional notebook context and `human:` review notes
- a selected refinement role

## Expected Outputs

- one bounded refinement pass against the current Design package
- improved option analysis and/or decision rationale
- clearer blueprint expectations in the role-relevant files
- explicit note of what remains open or which role should run next

## Repository Layout Assumption

Prefer the numbered X29 stage layout:

- `02-design/`

Be tolerant of capability folders that use:

- `design/`

Read and write within whichever Design directory is present. Do not normalize layout unless the user asks.

## `human:` Markup

Treat inline `human:` markup in relevant files as priority refinement input.

When `human:` comments are present:

- treat them as explicit review requests or constraints
- resolve them in context where possible
- preserve unresolved concerns as explicit open questions
- do not silently delete unresolved intent

## File Scope Announcement

Before making edits, clearly tell the user:

- `Active role: <role>`
- `I will read:`
- a bullet list using filenames only
- `I may update:`
- a bullet list using filenames only
- `Out of scope for this pass: ...`

Keep the write scope narrow and role-relevant.

## Writing Rules

- prefer concise markdown
- keep changes small and reviewable
- preserve file decomposition rather than collapsing into one large document
- mark assumptions and uncertainty clearly
- never present guesses as confirmed design fact
- do not rewrite unrelated files

## Incomplete Information

When information is incomplete:

- improve only what can be grounded in existing Define and Design artifacts
- preserve unresolved ambiguity explicitly
- add or update `05-open-questions.md` when needed
- leave `TODO:` markers where later design refinement is needed

Do not block unnecessarily, but do not flatten ambiguity into false certainty.

## May Read

- `01-define/**/*.md`
- `define/**/*.md`
- `02-design/**/*.md`
- `design/**/*.md`
- `system-architecture/**/*`
- `notebook/**/*.md`
- `notes/**/*.md`
- capability-level `README.md`
- workspace-level `x29.md`
- the selected role file under `references/roles/`
- [references/refinement-scope-patterns.md](references/refinement-scope-patterns.md)

## May Write

- files inside `02-design/`
- files inside `design/`

Typical updates are limited to:

- `00-summary.md`
- `01-options-considered.md`
- `02-decision.md`
- `03-solution-blueprint.md`
- `04-risks-and-tradeoffs.md`
- `05-open-questions.md`

## Must Not Do

- produce component impact mapping or dependency inventories (Map)
- create delivery slices, sequencing plans, or spec indexes (Plan)
- generate implementation specs or code (Execute)
- rewrite the full Design package when one bounded role pass is sufficient

## Handoff

Hand off to another `design/refine` pass when a different role or concern still needs work.

Hand off to `design/validate` only when the package looks coherent and unresolved tradeoffs are explicit.

## TODO

- Add heuristics for minimum safe write scope based on selected role and package maturity.
