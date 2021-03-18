var hints = [{id: "GenStr21a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr21a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["72-240z=72+33z"], dependencies: ["GenStr21a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr21a-h3", type: "hint", dependencies: ["GenStr21a-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation."}, {id: "GenStr21a-h4", type: "hint", dependencies: ["GenStr21a-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr21a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["72=72+207z"], dependencies: ["GenStr21a-h4"], title: "Addition", text: "Add 240z to each side of the equation."}, {id: "GenStr21a-h6", type: "hint", dependencies: ["GenStr21a-h5"], title: "Constant Terms", text: "Collect all constant terms on the left side of the equation."}, {id: "GenStr21a-h7", type: "hint", dependencies: ["GenStr21a-h6"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "GenStr21a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0=207z"], dependencies: ["GenStr21a-h7"], title: "Subtraction", text: "Subtract 72 from each side."}, {id: "GenStr21a-h9", type: "hint", dependencies: ["GenStr21a-h8"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr21a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["z=0"], dependencies: ["GenStr21a-h9"], title: "Division", text: "Divide 207 from each side."}, {id: "GenStr21a-h11", type: "hint", dependencies: ["GenStr21a-h10"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr21a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr21a-h11"], title: "Verification", text: "Check whether $$\\left(12\\right) \\left(\\left(1\\right)-\\left(5\\right) \\left(\\left(4\\right) \\left(0\\right)-\\left(1\\right)\\right)\\right)$$ equals $$\\left(3\\right) \\left(\\left(24\\right)+\\left(11\\right) \\left(0\\right)\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};