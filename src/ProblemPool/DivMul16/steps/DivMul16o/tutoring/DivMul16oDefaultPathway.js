var hints = [{id: "DivMul16o-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "DivMul16o-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-(2/5)*10=(1/10)a*10"], dependencies: ["DivMul16o-h1"], title: "Multiplication", text: "Multiple 10 from each side.", variabilization: {}}, {id: "DivMul16o-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4"], dependencies: ["DivMul16o-h2"], title: "Simplification", text: "What do we get for a after simplifying the equation?", variabilization: {}}, {id: "DivMul16o-h4", type: "hint", dependencies: ["DivMul16o-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul16o-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul16o-h4"], title: "Verification", text: "Check whether $$-\\left(\\frac{2}{5}\\right)$$ equals $$\\frac{1}{10} \\left(-4\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};