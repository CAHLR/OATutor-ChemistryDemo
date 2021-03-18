var hints = [{id: "LinEqua8a-h1", type: "hint", dependencies: [], title: "Find LCD", text: "We have three denominators: 3x, 4, and 6x."}, {id: "LinEqua8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12x"], dependencies: ["LinEqua8a-h1"], title: "LCD", text: "What is the LCD of this equation?"}, {id: "LinEqua8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8=3x-2"], dependencies: ["LinEqua8a-h2"], title: "Eliminating", text: "Simplify $$\\left(12\\right) x \\frac{2}{3} x=\\left(12\\right) x \\frac{1}{4}-\\left(12\\right) x \\frac{1}{6} x$$."}, {id: "LinEqua8a-h4", type: "hint", dependencies: ["LinEqua8a-h3"], title: "Solve equation", text: "Then we should solve the linear equation obtained."}, {id: "LinEqua8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=10/3"], dependencies: ["LinEqua8a-h4"], title: "Linear equation", text: "Solve the linear equation $$8=3x-2$$."}, ]; export {hints};