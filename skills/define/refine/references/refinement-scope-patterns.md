# Refinement Scope Patterns

Use this file to keep each Define refinement pass bounded and explicit.

## Required Pre-Edit Announcement

Before editing, tell the user:

- `Active role: <role>`
- `I will read:`
- a bullet list of filenames only, not full paths
- `I may update:`
- a bullet list of filenames only, not full paths
- `Out of scope for this pass: Design, Map, Plan, Implement, and unrelated Define files`

Adjust the file list to the actual package state. Do not claim a broader write scope than needed.

## File Selection Heuristics

- Prefer the smallest file set that can credibly improve the active role concern.
- Read `04-open-questions.md` when uncertainty is likely to affect the role.
- Read `03-risks.md` when the role touches operational, delivery, dependency, or trust concerns.
- Read notebook files only when they are likely to sharpen the active role perspective.
- If `human:` markup appears in relevant files, include those files in the read scope even if they were not part of the default role pattern.

## Default Out-Of-Scope Statement

Unless the user explicitly expands scope, say that this pass will not modify:

- Design files
- Map files
- Plan files
- Implement or execute files
- unrelated Define files outside the active role concern

## Editing Reminders

- Prefer incremental edits over broad rewrites.
- Preserve unresolved ambiguity as explicit notes.
- If a gap cannot be resolved, route it into `04-open-questions.md` or the role-relevant acceptance-criteria file.
- Preserve `human:` intent even when the requested change cannot be fully resolved.
