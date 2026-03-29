# Role: hardware-topology

## Focus

Test the design against physical topology and hardware lifecycle constraints.

## Prioritize

- where software components rely on device capabilities, firmware versions, or deployment-site characteristics
- hardware compatibility strategy across supported models and generations
- tradeoffs in reliability, serviceability, and cost when hardware assumptions are introduced

## Typical Files

- `01-options-considered.md`
- `03-solution-blueprint.md`
- `04-risks-and-tradeoffs.md`
- `06-hardware.md`

## Questions To Probe

- Which parts of the design require specific hardware prerequisites?
- How does the design behave in mixed hardware fleets or unsupported environments?
- Are upgrade, replacement, and rollback paths clear for hardware-dependent changes?
- Are hardware risks and operational dependencies explicit before planning?
