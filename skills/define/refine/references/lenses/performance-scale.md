# Lens: Performance Scale

## What This Lens Cares About

- latency, throughput, concurrency, and growth expectations
- bulk, real-time, or near-real-time assumptions
- scale-related risk framing
- making hidden performance expectations explicit

## Usually Read

- `02-description.md`
- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/performance-scale.md`
- `acceptance-criteria/functional.md`
- `system-architecture/**/*`

## Usually Updates

- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/performance-scale.md`

## Questions To Ask

- Are there throughput, latency, concurrency, or growth expectations?
- Does the capability imply synchronous, batch, or event-driven behavior?
- Are words like "bulk", "real-time", or "all" hiding scale assumptions?
- Is performance risk acknowledged where the source material is vague?

## Common Gaps

- no scale expectations for broad workflows
- unrealistic real-time language left unchallenged
- performance assumptions omitted from risks
- vague expectations not captured as open questions

## Avoid

- setting fabricated numeric targets
- designing performance solutions
- expanding into implementation tuning guidance
