import React from 'react'; import { InlineMath } from 'react-katex';import steps from "./SubAdd3-index.js"; const problem = {id: "SubAdd3", title: "Verify a Solution of an Equation", body: <div> Is <InlineMath math="y=\frac{7}{5}"/> a solution of the equation </div>, steps: steps, }; export { problem };