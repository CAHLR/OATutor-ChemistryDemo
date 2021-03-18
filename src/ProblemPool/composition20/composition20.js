import React from 'react'; import { InlineMath } from 'react-katex';import steps from "./composition20-index.js"; const problem = {id: "composition20", title: "Composition of Functions with Square Roots", body: <div> Given <InlineMath math="f(x)=\left(3\right) x^2"/> and <InlineMath math="g(x)=\sqrt{x-\left(5\right)}"/>, find the following. </div>, steps: steps, }; export { problem };