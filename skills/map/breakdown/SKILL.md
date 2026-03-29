---
name: "x29-map-breakdown"
description: "Use for the map stage when the next task is to summarize impacted components, dependencies, interfaces, and observability considerations."
---

# Map / Context Breakdown

## Purpose

Orient the `map` stage by identifying what parts of the system are likely affected, what interfaces may change, and where impact understanding is still thin.

## Capability Directory Check

Before doing any stage work, identify the capability number in scope and confirm the capability folder exists at `capabilities/JA-<number>-<title>/`.

If a matching `capabilities/JA-<number>-<title>` directory does not exist, stop and direct the user to run `x29 init` to initialize a new capability directory.

## Expected Inputs

- current `03-map/` files
- relevant `01-define/` and `02-design/` artifacts
- known codebase or system topology context

## Expected Outputs

- a grounded summary of likely impact areas
- missing analysis areas captured explicitly
- a recommendation for the next mapping pass

## May Read

- all files under `01-define/`
- all files under `02-design/`
- all files under `03-map/`

## May Write

- `03-map/components-impacted.md`
- `03-map/api-and-data-changes.md`
- `03-map/dependency-impact.md`

## Must Not Do

- infer broad system impact without evidence
- turn mapping into a delivery plan
- suppress uncertainty around legacy or poorly understood areas

## Handoff

Hand off to `map/refine` for a specific impact area, or to `map/validate` when impact coverage appears sufficient.

## TODO

- Add stronger guidance for partially known systems and discovery-heavy mapping.
