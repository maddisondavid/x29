# Lens: Observability

## What This Lens Cares About

- metrics, logs, traces, and events needed for operational visibility
- alerting or detection expectations
- ability to understand success, failure, and degraded behavior
- making monitoring needs explicit at the Define level

## Usually Read

- `02-description.md`
- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/observability.md`
- `acceptance-criteria/performance-scale.md`
- `system-architecture/**/*`

## Usually Updates

- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/observability.md`

## Questions To Ask

- What should teams be able to observe when this capability works or fails?
- What metrics, logs, traces, or events are implied?
- Are alerting expectations stated or missing?
- Is there any operational visibility expectation hidden in the PM intent?

## Common Gaps

- observability file left empty without explanation
- no signal for success or failure
- performance expectations disconnected from monitoring needs
- operational visibility assumed but not written down

## Avoid

- specifying exact telemetry implementation
- designing dashboards or alert rules in detail
- expanding into service architecture
