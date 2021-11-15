var hints = [{id: "a870b02DivMul16a-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "a870b02DivMul16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\left(8\\right) x}{8}=\\frac{56}{8}$$"], dependencies: ["a870b02DivMul16a-h1"], title: "Division", text: "Divide 8 from each side.", variabilization: {}}, {id: "a870b02DivMul16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["a870b02DivMul16a-h2"], title: "Simplification", text: "What do we get for x after simplifying the equation?", variabilization: {}}, {id: "a870b02DivMul16a-h4", type: "hint", dependencies: ["a870b02DivMul16a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul16a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul16a-h4"], title: "Verification", text: "Check whether $$\\left(8\\right) \\left(7\\right)$$ equals 56.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};