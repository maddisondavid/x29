# AGENTS

## Repo Intent

`x29` is a stage-based reasoning operating system for AI-assisted delivery.

Design for clarity, trust, and reviewability over clever automation.

## Durable Working Rules

- Treat stage conversation as the primary UX; treat internal skills as implementation details.
- Preserve the lifecycle flow: Define → Design → Map → Plan → Implement.
- Preserve the stage mode flow: Breakdown → Refine → Validate (or Verify) → optional Synthesis.
- Enforce transparency before edits: announce stage, mechanism, lens, read scope, write scope, and out-of-scope.
- Preserve and resolve inline `human:` comments; never silently drop unresolved human intent.
- Keep artifacts small, reviewable, and document-centric.
- Keep uncertainty explicit; do not turn ambiguity into fake certainty.
- Treat `validate` and `verify` as readiness gates before stage advancement.
- Prefer numbered stage folders in capability workspaces: `01-define`, `02-design`, `03-map`, `04-plan`, `05-execute`.
- Keep reusable guidance in `skills/` and `docs/`, not ad hoc root files.

## Editing Guidance

- Write realistic professional guidance, not abstract placeholder prose.
- Include explicit `TODO:` markers where future refinement is expected.
- Avoid unnecessary framework/package complexity.
- Keep examples understandable on first read by internal teams.
