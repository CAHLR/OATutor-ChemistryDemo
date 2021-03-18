var hints = [{id: "factor6b-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "To factor a trionomial $${ax}^2+bx+c$$, the first step is to find p and q, a pair of factors of ac with a sum of b."}, {id: "factor6b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6"], dependencies: ["factor6b-h1"], title: "Product of Numbers", text: "What is $$\\left(\\-2\\right) \\left(3\\right)$$?"}, {id: "factor6b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["factor6b-h2"], title: "Sum of Numbers", text: "What is $$\\left(\\-2\\right)+\\left(3\\right)$$?"}, {id: "factor6b-h4", type: "hint", dependencies: ["factor6b-h3"], title: "Rewriting the Expression", text: "The second step is to rewrite the original expression $$asax2+px+qx+c$$."}, {id: "factor6b-h5", type: "hint", dependencies: ["factor6b-h4"], title: "Greatest Common Factor (GCF)", text: "Thirdly, pull out the GCF of $${ax}^2+px$$."}, {id: "factor6b-h6", type: "hint", dependencies: ["factor6b-h5"], title: "Greatest Common Factor (GCF)", text: "Then, pull out the GCF of $$qx+c$$."}, {id: "factor6b-h7", type: "hint", dependencies: ["factor6b-h6"], title: "Factoring out the GCF", text: "Lastly, factor out the GCF of the expression."}, ]; export {hints};