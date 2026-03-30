# Lens: Security

## What This Lens Cares About

- authentication and authorization implications
- sensitive data handling
- auditability and policy controls
- privacy, compliance, and tenant-boundary concerns

## Usually Read

- `01-scope.md`
- `02-description.md`
- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/security.md`
- `acceptance-criteria/data-contracts.md`
- `system-architecture/**/*`

## Usually Updates

- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/security.md`
- `acceptance-criteria/data-contracts.md`

## Questions To Ask

- Does this capability touch sensitive data or privileged actions?
- Are authn, authz, audit, or policy controls implied?
- Are privacy or compliance expectations missing?
- Are there system-boundary or tenancy concerns that need to be named?

## Common Gaps

- no security acceptance criteria for privileged behavior
- missing audit expectations
- data movement described without security implications
- compliance-sensitive concerns treated as functional detail only

## Avoid

- designing security architecture
- inventing controls that are not grounded in context
- turning possible risks into false compliance claims
