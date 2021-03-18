var hints = [{id: "VarCon25a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the right side as the \"variable\" side."}, {id: "VarCon25a-h2", type: "hint", dependencies: ["VarCon25a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon25a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2=4a+18"], dependencies: ["VarCon25a-h2"], title: "Subtraction", text: "Subtract 2a from each side."}, {id: "VarCon25a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-20=4a"], dependencies: ["VarCon25a-h3"], title: "Subtraction", text: "Subtract 18 from each side."}, {id: "VarCon25a-h5", type: "hint", dependencies: ["VarCon25a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon25a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=-5"], dependencies: ["VarCon25a-h5"], title: "Division", text: "Divide 4 from each side."}, {id: "VarCon25a-h7", type: "hint", dependencies: ["VarCon25a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon25a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon25a-h7"], title: "Verification", text: "Check whether $$\\left(2\\right) \\left(\\-5\\right)-\\left(2\\right)$$ equals $$\\left(6\\right) \\left(\\-5\\right)+\\left(18\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};