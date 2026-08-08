# Prompt 05: Build Interactive System

Read:
- `/AGENTS.md`
- `/docs/06-interactive-system.md`
- `/docs/04-design-system.md`

Create reusable interactive visualization architecture supporting:
- React components
- Canvas
- SVG
- Three.js
- React Three Fiber
- D3.js
- User controls
- Sliders
- Play/pause
- Reset
- Responsive layouts

Create reusable components such as:
- InteractiveContainer
- SimulationControls
- ParameterSlider
- SimulationLegend
- SimulationExplanation

Interactive components must be independent from article pages.

Example:
`<OrbitSimulation />`

Do not implement every simulation yet. Focus on clean reusable infrastructure.

Lazy-load heavy interactive components where appropriate.

Run all checks.
