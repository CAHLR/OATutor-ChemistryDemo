var hints = [{id: "VarCon24a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the right side as the \"variable\" side."}, {id: "VarCon24a-h2", type: "hint", dependencies: ["VarCon24a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3=6a+7"], dependencies: ["VarCon24a-h2"], title: "Subtraction", text: "Subtract 7a from each side."}, {id: "VarCon24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10=6a"], dependencies: ["VarCon24a-h3"], title: "Subtraction", text: "Subtract 7 from each side."}, {id: "VarCon24a-h5", type: "hint", dependencies: ["VarCon24a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon24a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=-5/3"], dependencies: ["VarCon24a-h5"], title: "Division", text: "Divide 6 from each side."}, {id: "VarCon24a-h7", type: "hint", dependencies: ["VarCon24a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon24a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon24a-h7"], title: "Verification", text: "Check whether $$\\left(7\\right) \\frac{\\left(\\-5\\right)}{3}-\\left(3\\right)$$ equals $$\\left(13\\right) \\frac{\\left(\\-5\\right)}{3}+\\left(7\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};