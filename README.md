# x29

<img src="assets/repo-image.jpeg" alt="x29 repository image" width="720" />

**x29 is an agent operating system for turning ambiguous capability intent into trustworthy implementation specs through a staged reasoning process.**

Equivalent shorthand: **x29 is a reasoning operating system for AI-assisted delivery.**

## Repositioned Interaction Model

x29 now centers on a **stage-first conversation model**:

- Humans choose a capability and stage.
- Humans speak naturally inside that stage.
- x29 routes to the right internal mechanism.
- x29 announces exactly what it will do before it edits anything.

Internal skills still exist, but they are an implementation detail behind stage-based orchestration.

> Internal phrase: **humans choose the stage; x29 chooses the mechanism.**

## Core Principles (Preserved)

- Specs distill reasoning; they do not replace reasoning.
- Humans stay in control of intent, scope, and progression.
- Ambiguity must be visible, not hidden.
- Chat directs work; documents hold reasoning.
- Small, reviewable artifacts are preferred over monoliths.
- Validation/verification gates remain explicit.
- X29 is not a spec factory.

## Stage System

Primary lifecycle stages:

1. Define
2. Design
3. Map
4. Plan
5. Implement

Core stage modes:

- Breakdown
- Refine
- Validate
- Synthesis

Implement uses operational variants:

- Breakdown
- Execute
- Verify
- Synthesis

## User-Facing Experience

Example natural interactions:

- `x29 define capability 123`
- `I want to define capability 123`
- `review this from a security lens`
- `resolve the comments in this file`
- `are we ready to move on?`
- `create a summary for stakeholders`

The user does **not** need to manually pick internal agents.

## Transparency Contract (Required Behavior)

Before routing and editing, x29 should announce:

- inferred stage
- selected mode/mechanism
- active lens (if explicit or inferred)
- files it will read
- files it may update
- what is out of scope for this pass

See `docs/orchestration.md` for the full routing contract.

## Architecture Layers

1. **User-facing orchestration layer**
   - capability and stage identification
   - intent interpretation
   - mode/lens/file-scope inference
   - explicit routing announcements

2. **Internal stage skills (`x29-*`)**
   - stage-specific constraints and output rules
   - read/write boundaries
   - done criteria
   - must-not-do guardrails

See `docs/internal-routing.md` and `skills/**/SKILL.md`.

## Repository Layout

```text
x29/
  AGENTS.md
  docs/
  skills/
  templates/
  examples/
  src/
  scripts/
```

Capability layout remains document-centric:

```text
capabilities/
  JA-<number>-Short-Title/
    notebook/
    01-define/
    02-design/
    03-map/
    04-plan/
    05-execute/
```

## Install and Use

```bash
npm install
npm run init
```

or:

```bash
x29 init
x29 install-windsurf [target-repo]
x29 install-codex [target-repo]
```

x29 remains a real installable toolkit with repo-backed skills and update behavior.

## Docs Index

- `docs/usage.md` — stage-first user workflow and conversational patterns
- `docs/orchestration.md` — orchestration/routing model
- `docs/internal-routing.md` — internal skill selection model and catalog behavior
- `docs/reference/stage-model.md` — canonical stage and mode definitions
- `docs/init.md` — bootstrap and installer details

## TODO

- Add runnable orchestration prototypes for Codex and Windsurf adapters.
- Add stronger auto-detection patterns for capability context in multi-capability repositories.
- Add richer examples for mixed lens chaining across multiple refine passes.
