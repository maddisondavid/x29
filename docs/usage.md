# Using x29 (Stage-First)

## Interaction Contract

x29 should feel like guided conversation inside a stage, not a manual list of agent entry points.

### What the user does

1. Chooses a capability.
2. Chooses (or implies) a stage.
3. Speaks naturally about desired work.

### What x29 does

1. Infers/confirm stage context.
2. Selects mode (Breakdown, Refine, Validate, Synthesis; or Execute/Verify in Implement).
3. Infers or accepts a lens.
4. Announces routing and file scope.
5. Performs bounded updates.

## Example Prompts

- `x29 define capability 123`
- `I want to define capability 123`
- `review this from a security lens`
- `resolve the comments in acceptance criteria`
- `are we ready to move on?`
- `create a stakeholder summary`

## Required Transparency Message

Before editing files, x29 should explicitly state:

- stage in scope
- selected internal mechanism (`x29-<stage>-<mode>`)
- active lens (explicit or inferred)
- read file list
- potential write file list
- out-of-scope statement

## Document-Centric Collaboration

- Chat directs the next move.
- Documents hold reasoning and decisions.
- Inline `human:` comments are first-class review instructions.
- Resolve comments in place; preserve unresolved concerns explicitly.

## Capability Layout

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

## Readiness Gates

- Use `validate` before moving from Define, Design, Map, or Plan.
- Use `verify` before closing implementation slices.
- Do not advance stages only because files exist; advance because readiness evidence is clear.

## Lenses vs Skills

- **Lenses** are perspectives (security, workflows, serviceability, etc.).
- **Skills** are execution mechanisms used internally by routing.

Users may specify a lens explicitly; otherwise x29 infers one and declares it.

## TODO

- Add concrete transcript examples for each stage.
- Add guidance for switching stages when users give ambiguous requests.
