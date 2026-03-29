# Map Breakdown Checklist (First Pass)

Use this checklist before concluding `x29-map-breakdown` output.

## 1) Inputs and Grounding

- [ ] Reviewed full Design package (not a single file only).
- [ ] Reviewed `system-architecture/` context.
- [ ] Inspected current codebase/module boundaries for grounding.
- [ ] Captured `human:` annotations that affect mapping decisions.
- [ ] Noted where Design intent appears to conflict with current architecture or code boundaries.

## 2) Component Impact Coverage

- [ ] Produced `03-map/01-component-index.md` with all impacted components.
- [ ] Classified each impacted component as `add`, `modify`, or `delete`.
- [ ] Flagged uncertain classification explicitly (no silent assumptions).
- [ ] Created one `03-map/components/<component-name>.md` per impacted component.
- [ ] Documented ownership/boundary uncertainty when component ownership is unclear.

## 3) Component Change Detail

For each impacted component file:

- [ ] Current role documented.
- [ ] Why affected documented.
- [ ] Expected behavior change documented.
- [ ] API/interface implications captured.
- [ ] Data/storage implications captured.
- [ ] Upstream/downstream dependencies captured.
- [ ] Operational/serviceability implications captured where visible.
- [ ] Risks/tricky areas captured.
- [ ] Component-level open questions captured.

## 4) Contracts and Interactions

- [ ] Created `03-map/contracts/component-contract-index.md`.
- [ ] Created one contract file per meaningful interaction.
- [ ] Each contract captures participants, purpose, data exchanged, and control flow.
- [ ] Responsibilities across participating components are clear.
- [ ] Known failure/error considerations are captured if available.
- [ ] Missing contract detail is recorded as open questions.

## 5) Persona and Workflow Expansion

- [ ] Created `03-map/persona-flows/00-persona-index.md`.
- [ ] Expanded high-level Design workflows into persona-level flow files.
- [ ] Each persona flow includes main, alternate, and failure paths.
- [ ] Systems/components and data exchanged are explicit per flow.
- [ ] Control touchpoints are explicit per flow.
- [ ] Workflow gaps are surfaced as open questions (not guessed).

## 6) UI and Wireframe Implications

- [ ] Captured UI touchpoints visible from Design.
- [ ] Captured wireframe implications where the Design suggests screen/state changes.
- [ ] Explicitly noted when UI implications are unknown or not provided.

## 7) Control and Data Path Diagram

- [ ] Created `03-map/03-control-and-data-paths.md` when Design indicates meaningful cross-component control/data interaction complexity.
- [ ] Added at least one high-level diagram (for example, Mermaid) showing control flow and data flow between major components.
- [ ] Ensured diagram and notes are grounded in Design/architecture evidence (no invented paths).

## 8) Open Questions and Ambiguity

- [ ] Created/updated `03-map/02-open-questions.md`.
- [ ] Recorded unresolved ownership, boundary, behavior, and contract questions.
- [ ] Recorded unresolved persona flow and UI detail questions.
- [ ] Distinguished assumptions from confirmed Design facts.
- [ ] Avoided selecting a single interpretation when multiple are plausible.

## 9) Stage Boundary Integrity

- [ ] No implementation tasks or coding instructions included.
- [ ] No delivery slices or sequencing plan included.
- [ ] No implementation-level specs produced.
- [ ] Artifacts remain reviewable and map-stage scoped.

## 10) Package Coherence

- [ ] `03-map/00-overview.md` summarizes additions/modifications/deletions and cross-component impact.
- [ ] Indices align with underlying files (components, contracts, persona flows).
- [ ] Links between component files, contracts, and persona flows are coherent.
- [ ] Control/data path diagram references the same components and contracts used elsewhere in the map package.
- [ ] TODO markers are realistic and point to later refinement work.
