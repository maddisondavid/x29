# AGENTS

## Repo Intent

`x29` is a document-centric staged reasoning toolkit for AI-assisted software delivery. Optimize for clarity, reviewability, and durable workflow defaults over clever automation.

## Working Rules

- Prefer small focused markdown files over monolithic documents.
- Preserve and respect inline `human:` annotations.
- Keep stage logic lightweight unless a file explicitly asks for deeper structure.
- Reuse the stage/mode skill patterns instead of inventing narrow one-off agents.
- Treat `validate` and `verify` as readiness gates before advancing stages.
- Use the numbered capability stage folders as the default working layout: `01-define`, `02-design`, `03-map`, `04-plan`, `05-execute`.
- Put reusable workflow guidance in `skills/`, not in ad hoc root docs.

## Editing Guidance

- Keep placeholder instructions realistic and professional.
- Leave explicit `TODO:` markers where later prompts should refine behavior.
- Avoid introducing unnecessary framework or package complexity.
- Keep generated examples understandable to internal teams on first read.
