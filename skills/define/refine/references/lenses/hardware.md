# Lens: Hardware

## What This Lens Cares About

- whether the capability changes physical devices, firmware, edge gateways, or host environment assumptions
- compatibility constraints across hardware generations, SKUs, and field configurations
- installation, maintenance, and support expectations when physical assets are involved
- making no-hardware-impact assumptions explicit instead of implicit

## Usually Read

- `02-description.md`
- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/functional.md`
- `acceptance-criteria/hardware.md`
- `system-architecture/**/*`

## Usually Updates

- `03-risks.md`
- `04-open-questions.md`
- `acceptance-criteria/hardware.md`

## Questions To Ask

- Does this capability require new hardware, firmware changes, or physical installation work?
- Are there hardware compatibility limits (model/version/region/vendor) that affect scope?
- What happens for customers or environments that do not have required hardware?
- Are field operations, support, or servicing expectations clear enough for Define?

## Common Gaps

- hardware assumptions hidden in functional language
- missing fallback behavior when required hardware is unavailable
- no lifecycle expectations for procurement, install, or replacement
- unclear ownership between software and hardware support teams

## Avoid

- designing hardware architectures in Define
- inventing hardware constraints without source evidence
- drifting into detailed rollout sequencing or implementation planning
