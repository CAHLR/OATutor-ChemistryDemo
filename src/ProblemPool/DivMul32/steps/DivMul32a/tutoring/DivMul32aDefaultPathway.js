var hints = [{id: "DivMul32a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation.", variabilization: {}}, {id: "DivMul32a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(3/4)p=18"], dependencies: ["DivMul32a-h1"], title: "Translation", text: "Translate it into an equation.", variabilization: {}}, {id: "DivMul32a-h3", type: "hint", dependencies: ["DivMul32a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul32a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["p=24"], dependencies: ["DivMul32a-h3"], title: "Division", text: "Divide both sides by $$\\frac{3}{4}$$.", variabilization: {}}, {id: "DivMul32a-h5", type: "hint", dependencies: ["DivMul32a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul32a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul32a-h5"], title: "Verification", text: "Check whether $$\\frac{3}{4} \\left(24\\right)$$ equals 18.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};