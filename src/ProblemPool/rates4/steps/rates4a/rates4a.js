import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./rates4a-index.js"; const step = {id: "rates4a", stepAnswer: ["a+3"], problemType: "TextBox", stepTitle: <div> Find the average rate of change of <InlineMath math="g t=t^2+3t+1"/> on the interval [0,a].</div>, stepBody: "The answer will be an expression involving a in simplest form.", answerType: "arithmetic", hints: hints}; export {step};