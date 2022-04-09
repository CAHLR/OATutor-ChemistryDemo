var hints = [{id: "a372017cramer12a-h1", type: "hint", dependencies: [], title: "Use the formula", text: "First, use the formula for Cramer's rule to solve for x and y. If using a 2x2 matrix, the formula for it is $$x=(\\begin{bmatrix} c1 & b1 \\\\ c2 & b2 \\end{bmatrix})/(\\begin{bmatrix} a1 & b1 \\\\ a2 & b2 \\end{bmatrix})$$ and $$y=(\\begin{bmatrix} a1 & c1 \\\\ a2 & c2 \\end{bmatrix})/(\\begin{bmatrix} a1 & b1 \\\\ a2 & b2 \\end{bmatrix}$$.", variabilization: {}}, {id: "a372017cramer12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["a372017cramer12a-h1"], title: "Determinant", text: "Now, take the determinant of all matrices in the $$x=$$ section and simplify. What does x equal?", subHints: [{id: "a372017cramer12a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\frac{1}{2}$$.", variabilization: {}}], variabilization: {}}, {id: "a372017cramer12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{3}$$"], dependencies: ["a372017cramer12a-h2"], title: "Determinant", text: "Next, take the determinant of all matrices in the $$y=$$ section and simplify. What does y equal?", subHints: [{id: "a372017cramer12a-h3-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\frac{1}{3}$$.", variabilization: {}}], variabilization: {}}, {id: "a372017cramer12a-h4", type: "hint", dependencies: ["a372017cramer12a-h3"], title: "Answer", text: "Therefore, the answer is $$\\frac{\\frac{1}{21}}{3}$$", variabilization: {}}, ]; export {hints};