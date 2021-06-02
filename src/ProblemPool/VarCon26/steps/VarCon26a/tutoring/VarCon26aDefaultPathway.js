var hints = [{id: "VarCon26a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the right side as the \"variable\" side.", variabilization: {}}, {id: "VarCon26a-h2", type: "hint", dependencies: ["VarCon26a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon26a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1=3k+17"], dependencies: ["VarCon26a-h2"], title: "Subtraction", text: "Subtract 4k from each side.", variabilization: {}}, {id: "VarCon26a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-18=3k"], dependencies: ["VarCon26a-h3"], title: "Subtraction", text: "Subtract 17 from each side.", variabilization: {}}, {id: "VarCon26a-h5", type: "hint", dependencies: ["VarCon26a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon26a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["k=-6"], dependencies: ["VarCon26a-h5"], title: "Division", text: "Divide 3 from each side.", variabilization: {}}, {id: "VarCon26a-h7", type: "hint", dependencies: ["VarCon26a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon26a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon26a-h7"], title: "Verification", text: "Check whether $$\\left(4\\right) \\left(-6\\right)-\\left(1\\right)$$ equals $$\\left(7\\right) \\left(-6\\right)+\\left(17\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};