# Sample Capability

This example demonstrates x29's stage-based interaction model over a document-centric capability workspace.

## Layout

```text
sample-capability/
  notebook/
  01-define/
  02-design/
  03-map/
  04-plan/
  05-execute/
```

## Conversational Usage Examples

- `x29 define capability 123`
- `resolve comments in 01-define/acceptance-criteria.md from a serviceability lens`
- `are we ready to move from Design to Map?`
- `create a stakeholder summary for the current Plan stage`

## Transparency Example

A healthy x29 response should announce routing before edits, for example:

- stage: Define
- mechanism: `x29-define-refine`
- lens: serviceability
- read scope: `01-define/acceptance-criteria.md`, `01-define/open-questions.md`
- write scope: `01-define/acceptance-criteria.md`, `01-define/open-questions.md`
- out of scope: Design/Map/Plan/Implement artifacts

## TODO

- Add sample transcripts per stage/mode using this capability.
