# Role: Data Contracts

## What This Role Cares About

- systems of record, interfaces, and contract boundaries
- important inputs, outputs, events, or state changes
- data ownership and transformation expectations
- hidden integration assumptions

## Usually Read

- `01-scope.md`
- `02-description.md`
- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/data-contracts.md`
- `system-architecture/**/*`

## Usually Updates

- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/data-contracts.md`
- `02-description.md`

## Questions To Ask

- What systems, interfaces, or data boundaries are implied?
- What inputs and outputs matter?
- Is a system of record implied but not named?
- Are data ownership or contract changes assumed without clarity?

## Common Gaps

- data flows implied but not stated
- missing contract expectations for integrations
- system-of-record ambiguity
- data risk omitted from the Define package

## Avoid

- producing API or schema design
- mapping implementation changes
- inventing integration contracts not grounded in source material
