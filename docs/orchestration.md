# x29 Orchestration Model

This document defines the user-facing orchestration layer that maps stage-level intent to internal skill execution.

## Goal

Turn natural stage conversation into explicit, trustworthy routing decisions.

## Two-Layer Runtime

1. **Orchestration layer (user-facing)**
   - detects capability and stage
   - infers user intent and selects mode
   - infers optional lens
   - declares file scope and boundaries

2. **Skill layer (internal)**
   - executes stage+mode behavior
   - enforces read/write boundaries and guardrails
   - defines done criteria and handoff hints

## Routing Inputs

Routing should use:

- stage signals in user prompt
- current artifact state in capability folders
- inline `human:` comments in relevant files
- explicit or implied lens language
- file location and file type cues

## Routing Outputs (Must Be Announced)

Before edits, output a concise routing declaration:

1. current stage
2. selected internal mechanism (`x29-<stage>-<mode>`)
3. selected lens (or "none")
4. files to read
5. files that may be updated
6. what is out of scope this pass

## Mode Inference Defaults

- New stage kickoff language → `breakdown`
- "review/refine/resolve comments" language → `refine`
- "ready to move on/are we ready" language → `validate` or `verify`
- "summary/rollup/stakeholder update" language → `synthesis`

## Lens Inference Defaults

- Security language → security lens
- Reliability/ops/support language → serviceability or operability lens
- Metrics/telemetry language → observability lens
- Workflow/persona language → workflows/UX lens
- API/schema/integration language → data/contracts lens

If lens inference is uncertain, ask a short clarifying question or choose best-fit lens and state uncertainty.

## File Scope Defaults by Stage

- Define: `notebook/`, `01-define/`
- Design: `02-design/` plus traceability to `01-define/`
- Map: `03-map/` plus traceability to `02-design/`
- Plan: `04-plan/` plus traceability to `03-map/`
- Implement: `05-execute/` plus traceability to `04-plan/`

## Non-Goals

- No silent autonomous end-to-end execution.
- No giant user-facing registry of internal skills.
- No replacing stage artifacts with chat-only state.

## TODO

- Add deterministic routing pseudocode and confidence scoring.
- Add adapter notes for Windsurf and Codex runtime differences.
