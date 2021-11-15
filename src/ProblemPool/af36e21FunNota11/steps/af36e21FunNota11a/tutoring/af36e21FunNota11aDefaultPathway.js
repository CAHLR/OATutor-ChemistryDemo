var hints = [{id: "af36e21FunNota11a-h1", type: "hint", dependencies: [], title: "Algebraic form", text: "To express the relationship in this form, we need to be able to write the relationship where p is a fucntion of n, which means wirting it as p $$=$$ [expression involving n].", variabilization: {}}, {id: "af36e21FunNota11a-h2", type: "hint", dependencies: ["af36e21FunNota11a-h1"], title: "Subtraction", text: "Subtract 2n from both sides, and we get $$6p=12-2n$$.", variabilization: {}}, {id: "af36e21FunNota11a-h3", type: "hint", dependencies: ["af36e21FunNota11a-h2"], title: "Division", text: "Divide both sides by 6, and we get $$p=\\frac{\\left(12\\right)-\\left(2\\right) n}{6}$$.", variabilization: {}}, {id: "af36e21FunNota11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$p=\\left(2\\right)-\\frac{1}{3} n$$"], dependencies: ["af36e21FunNota11a-h3"], title: "Simplification", text: "Simplify the expression. What do you get?", variabilization: {}}, ]; export {hints};