# PM Notes Review Checklist

Use this checklist before drafting the first-pass `01-define/` package. Treat it as a prompt aid, not a scoring sheet.

## Intent and Scope

- What problem is the capability meant to solve?
- Who is asking for it, and who is affected by it?
- What is explicitly in scope for this pass?
- What is explicitly out of scope?
- Are scope boundaries implied but not stated?
- Are there timing or rollout assumptions hiding inside the request?

## Stakeholders and Ownership

- Which human or system stakeholders are named?
- Who will operate, support, approve, or consume the capability?
- Is there an obvious missing stakeholder such as support, compliance, security, or data ownership?

## Workflow and UX

- What user or operator workflow is implied?
- What starts the workflow and what counts as completion?
- Are there role-specific paths, approvals, or exception cases?
- Does the request imply UX, API, back-office, or support workflows that need to be called out separately?

## Serviceability and Operability

- Who is expected to support this in production?
- What troubleshooting, diagnostics, or admin controls may be needed?
- Are there support or runbook expectations implied by the capability?

## Observability

- What events, metrics, logs, or traces might be expected?
- What failure modes would teams need to detect?
- Is there any explicit or implicit monitoring expectation?

## Security and Compliance

- Does the capability touch sensitive data, privileged actions, or tenant boundaries?
- Are authentication, authorization, audit, or policy controls implied?
- Are privacy, retention, or compliance expectations missing?

## Performance and Scale

- Is there any hint of expected throughput, latency, concurrency, or growth?
- Does the workflow sound batch-oriented, synchronous, near-real-time, or event-driven?
- Is there a scale assumption hiding behind terms like "all", "bulk", "global", or "real-time"?

## Data and Contracts

- What systems of record, APIs, files, or events are implied?
- Are inputs, outputs, or contract boundaries unclear?
- Does the capability appear to create, transform, sync, or expose data?

## Dependencies and Risks

- Are upstream or downstream dependencies named?
- Does the request depend on another team, platform, or policy decision?
- Are there architecture or platform assumptions that should be challenged?
- Is architecture context missing enough that this should be called out as a risk?

## Drafting Reminders

- Mark assumptions clearly.
- Mark uncertainty clearly.
- Write questions that are specific to what was actually found.
- If a concern area is not yet applicable, leave a `TODO:` marker rather than inventing detail.
