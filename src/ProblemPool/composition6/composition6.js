import React from 'react'; import { InlineMath } from 'react-katex';import steps from "./composition6-index.js"; const problem = {id: "composition6", title: "Decomposing a Function", body: <div> Find functions f(x) and g(x) so the given function can be expressed as <InlineMath math="h(x)=f(g(x))"/>. </div>, steps: steps, }; export { problem };