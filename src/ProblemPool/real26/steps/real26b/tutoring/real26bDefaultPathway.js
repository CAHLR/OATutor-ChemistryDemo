var hints = [{id: "real26b-h1", type: "hint", dependencies: [], title: "Parentheses", text: "The first step is to simplify the parentheses.", variabilization: {}}, {id: "real26b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["real26b-h1"], title: "Parentheses", text: "What is $$\\left(3\\right) \\left(2\\right)$$?", variabilization: {}}, {id: "real26b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["real26b-h2"], title: "Parentheses", text: "What is $$\\left(5\\right)+\\left(6\\right)+\\left(4\\right)$$?", variabilization: {}}, {id: "real26b-h4", type: "hint", dependencies: ["real26b-h3"], title: "Multiplication", text: "The next step is to simplify multiplication and division.", variabilization: {}}, {id: "real26b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["30"], dependencies: ["real26b-h4"], title: "Multiplication", text: "What is $$\\left(2\\right) \\left(15\\right)$$?", variabilization: {}}, ]; export {hints};