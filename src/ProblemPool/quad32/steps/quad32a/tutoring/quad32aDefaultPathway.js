var hints = [{id: "quad32a-h1", type: "hint", dependencies: [], title: "Finding the LCM", text: "Multiply a and c (12 and 2)."}, {id: "quad32a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24"], dependencies: ["quad32a-h1"], title: "Finding the LCM", text: "What is 12*2?"}, {id: "quad32a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3, 8"], dependencies: ["quad32a-h2"], title: "Finding Factors", text: "List the factors of 24. Which pair of factors equals 11?"}, {id: "quad32a-h4", type: "hint", dependencies: ["quad32a-h3"], title: "Finding Factors", text: "Separate 11x into 3x and 8x."}, {id: "quad32a-h5", type: "hint", dependencies: ["quad32a-h4"], title: "Finding Factors", text: "Rewrite quadratic equation as $$12x^2+3x+8x+2=0$$"}, {id: "quad32a-h6", type: "hint", dependencies: ["quad32a-h5"], title: "Finding Factors", text: "Find a common factor between the first two terms."}, {id: "quad32a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x"], dependencies: ["quad32a-h6"], title: "Finding Factors", text: "What is the common term?"}, {id: "quad32a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3*x*(4x+1)"], dependencies: ["quad32a-h7"], title: "Finding Factors", text: "Factor out the common term. What are the first two terms now?"}, {id: "quad32a-h9", type: "hint", dependencies: ["quad32a-h8"], title: "Finding Factors", text: "Find a common factor between the last two terms."}, {id: "quad32a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["quad32a-h9"], title: "Finding Factors", text: "What is the common term?"}, {id: "quad32a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2*(4x+1)"], dependencies: ["quad32a-h10"], title: "Finding Factors", text: "Factor out the common term. What are the first two terms now?"}, {id: "quad32a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(4x+1)"], dependencies: ["quad32a-h11"], title: "Finding Factors", text: "Factor out the common expression. What is the common expression?"}, {id: "quad32a-h13", type: "hint", dependencies: ["quad32a-h12"], title: "Finding Factors", text: "Rewrite the quadratic equation as $$\\left(4x+1\\right) \\left(3x+2\\right)=0$$"}, {id: "quad32a-h14", type: "hint", dependencies: ["quad32a-h13"], title: "Finding Factors", text: "Use zero-product property to find the solutions."}, {id: "quad32a-h15", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/4"], dependencies: ["quad32a-h14"], title: "Finding Factors", text: "What is the solution of (4x+1)=0?"}, {id: "quad32a-h16", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2/3"], dependencies: ["quad32a-h15"], title: "Finding Factors", text: "What is the solution of $$3x+2=0$$"}, {id: "quad32a-h17", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/4, -2/3"], dependencies: ["quad32a-h16"], title: "Finding Factors", text: "What are the solutions?"}, ]; export {hints};