import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./exp1c-index.js"; const step = {id: "exp1c", stepAnswer: ["x**10"], problemType: "MultipleChoice", stepTitle: <div> <InlineMath math="x^2 x^5 x^3"/></div>, stepBody: "", choices: ["x^10", "x^30", "x^13", "x^17"], answerType: "string", hints: hints}; export {step};