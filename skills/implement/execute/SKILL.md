---
name: "x29-implement-execute"
description: "Used to carry out a bounded implementation slice and keep execution records current."
---

# Implement / Execute

## Routing Contract

- **Stage:** `implement`
- **Mode:** `execute`
- **Trigger requests:** “implement this slice”, “resolve execute comments”.
- **Problem solved:** Performs implementation work while keeping notes, risks, and unresolved issues transparent.
- **Common lenses:**
- serviceability
- performance
- security

## File Scope

### Reads
- `04-plan/**/*.md`
- `05-execute/**/*.md`
- `target code/files for slice`

### Writes
- `05-execute/implementation-notes.md`
- `05-execute/unresolved-issues.md`
- `bounded implementation artifacts`

## Operating Rules

- Announce routing before editing: stage, mode, inferred/selected lens, read scope, write scope, and out-of-scope areas.
- Preserve inline `human:` comments and resolve them in-place when asked.
- Keep artifacts reviewable and explicit about assumptions, unknowns, and risks.
- Leave explicit `TODO:` markers where later refinement is expected.

## Must Not Do

- Expand scope silently
- Treat code changes as verification completion
- Drop unresolved issues from record

## Done Means

Slice changes are implemented, notes updated, and verification targets are clearly listed.

## Next Likely Step

Use stage readiness to decide whether to run another `implement/execute` pass, a `implement` validation gate, or hand off to the next stage.

