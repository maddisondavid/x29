# x29

<img src="assets/repo-image.jpeg" alt="x29 repository image" width="720" />

`x29` is a staged reasoning toolkit for AI-assisted software delivery.

It is built on a simple premise: specifications distill reasoning; they do not replace reasoning. The goal is not to generate one giant artifact and pretend the work is done. The goal is to help teams move from intent to implementation through small, reviewable, document-centric steps.

## Why x29 exists

Most AI delivery workflows collapse too much into a single interaction:

- one prompt
- one broad response
- one oversized specification
- one implied handoff to implementation

That pattern can be fast at first and expensive later. It tends to hide assumptions, compress tradeoffs, and make review harder than it should be.

`x29` takes a different path:

- reasoning is staged
- documents are the primary collaboration surface
- detail is expanded progressively
- humans remain in control of intent and review
- decomposed files are preferred over monolithic specs
- inline `human:` annotations are treated as normal collaboration signals

This is designed for fast iteration without drifting into bureaucratic process.

## Core Model

### Stages

`x29` uses five high-level stages:

1. `define`
2. `design`
3. `map`
4. `plan`
5. `implement`

These stages are intentionally broad. In this first pass, `x29` does not hard-code heavy stage-specific logic. The repository provides a professional scaffold, reusable interaction patterns, and durable defaults that teams can refine over time.

### Interaction Modes

Within each stage, work is driven through a small set of reusable interaction modes:

- `context-breakdown`
- `refine`
- `validate`
- optional `synthesize`

The `implement` stage uses slightly different operational names where it matters:

- `context-breakdown`
- `execute`
- `verify`
- optional `synthesize`

These are meant to be reusable patterns, not a giant registry of narrowly scoped agents.

## Philosophy

- Humans stay in control by setting intent and expanding detail progressively.
- AI should help clarify and accelerate work, not conceal weak reasoning.
- Reviewable chunks beat oversized documents.
- Parallelism matters: a human should be able to review one file while the agent works on another.
- Documents should carry the working state; chat should direct the next action.
- Inline document markup such as `human:` should be treated as first-class collaboration, not noise.

## What x29 is not

`x29` intentionally does not try to be:

- a one-shot specification generator
- a fake autonomous digital employee system
- a stage engine with rigid heavy workflow enforcement
- a toolkit with dozens of brittle agent entry points

## Repository Structure

```text
x29/
  README.md
  AGENTS.md
  package.json
  scripts/
  docs/
  skills/
  templates/
  examples/
  src/
```

### Key directories

- `skills/`: reusable stage/mode skill definitions
- `templates/`: starter document templates for stage artifacts
- `examples/`: example capability layout showing expected working structure
- `scripts/` and `src/`: bootstrap and CLI support for `x29 init`, `x29 install-windsurf`, and `x29 install-codex`
- `docs/`: supporting usage documentation

## Usage Model

Teams are expected to work one capability or work item at a time.

The normal flow is:

1. Select a capability.
2. Work through one stage folder at a time under `capabilities/JA-<number>-Short-Title/`.
3. Use `context-breakdown` to understand the current state of that stage.
4. Use `refine` to deepen one area at a time.
5. Use `validate` to check readiness before progressing.
6. Optionally use `synthesize` to create a cleaner stakeholder-facing rollup.
7. Move to the next stage only when the current one is ready.

Agent guardrail: before stage work begins, confirm the capability number in scope and verify a matching `capabilities/JA-<number>-<title>/` directory exists. If it does not, direct the user to run `x29 init` to initialize a new capability directory.

The `implement` stage maps to the working folder `05-execute/`. It follows the same spirit, but swaps `refine` for `execute` and `validate` for `verify`.

### Default Capability Layout

The working repository structure for a capability is:

```text
capabilities/
  JA-<number>-Short-Title/
    01-define/
      context/
    02-design/
      notebook/
    03-map/
      notebook/
    04-plan/
    05-execute/
```

`01-define/context/` is for supporting material gathered during definition. `02-design/notebook/` and `03-map/notebook/` are deliberately loose holding areas for spikes, human notes, and other exploratory material that should remain visible without forcing a fixed template too early.

## Document-Centric Collaboration

`x29` assumes documents are the source of working truth.

That means:

- stage outputs should live in files, not disappear into chat history
- smaller focused files are preferred over monolithic documents
- teams should expect to review, annotate, and refine markdown directly
- chat should be used to choose the next action, not to hold the entire state of the project

### Inline Human Markup

Inline annotations such as these are expected:

```md
human: this assumption only holds for internal users
human: split this into a smaller slice before plan signoff
human: validate whether the audit event is required for v1
```

These notes should be preserved, interpreted, and resolved during later passes. They are part of the collaboration model, not incidental comments.

### Parallel Work Across Files

Because the work is decomposed into smaller files, parallel review is easier:

- a human can edit `01-define/open-questions.md`
- an agent can refine `02-design/options-considered.md`
- another pass can validate `04-plan/value-slices.md`

This is one of the reasons `x29` avoids giant all-in-one specs.

## Lightweight Path vs Fuller Path

Not every task needs the same depth.

Use a lightweight path when:

- the change is small and localized
- impact is easy to understand
- risk is low
- open questions are limited

Use a fuller path when:

- multiple components are affected
- interfaces or data contracts may change
- sequencing matters
- there are real tradeoffs to capture
- implementation risk needs explicit review

The toolkit should help teams scale reasoning depth up or down without changing the overall structure.

## Installing and Bootstrapping

This repository includes a simple bootstrap command:

```bash
npm install
npm run init
```

Or, once linked:

```bash
x29 init
```

The initializer asks for the target location, capability number, and short title, then creates a starter capability structure and copies stage templates into place.

To install the toolkit skills into a target repository for Windsurf:

```bash
x29 install-windsurf
```

Or with an explicit target path:

```bash
x29 install-windsurf ../target-repo
```

This creates or updates `.windsurf/skills/` in the target repository and installs flat x29-prefixed skill directories such as `x29-define-context-breakdown` and `x29-plan-validate`. Rerunning the command refreshes x29-managed skills and removes stale `x29-*` skill directories, while leaving unrelated `.windsurf` content untouched.

To install the toolkit skills into a target repository for Codex:

```bash
x29 install-codex
```

Or with an explicit target path:

```bash
x29 install-codex ../target-repo
```

This creates or updates `.codex/skills/` in the target repository and installs the same flat x29-prefixed skill directories. Rerunning the command refreshes x29-managed skills and removes stale `x29-*` skill directories, while leaving unrelated `.codex` content untouched.

See [docs/usage.md](/C:/Users/maddi/source/x29/docs/usage.md) and [docs/init.md](/C:/Users/maddi/source/x29/docs/init.md) for details.

## First-Pass Scope

This first pass focuses on repository quality and workflow clarity:

- a clean repository structure
- durable root documentation
- realistic placeholder skills
- starter templates for stage artifacts
- an example capability layout
- a simple `x29 init` bootstrap flow

The stage intelligence is intentionally conservative for now. The structure is meant to be real and usable today, while leaving clear TODO markers for later refinement.
