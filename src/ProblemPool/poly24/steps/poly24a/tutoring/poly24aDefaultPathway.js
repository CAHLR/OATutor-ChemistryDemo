var hints = [{id: "poly24a-h1", type: "hint", dependencies: [], title: "Distributive Property Explanation", text: "The distributive property is defined as when you multiply a number by a sum or difference, you have to multiply each term of of the sum or difference by that number.", variabilization: {}}, {id: "poly24a-h2", type: "hint", dependencies: ["poly24a-h1"], title: "Splitting Sums", text: "Split the $$\\frac{sum}{difference}$$ that has the least amount of terms into its individual terms, to use the distributive property with.", variabilization: {}}, {id: "poly24a-h3", type: "hint", dependencies: ["poly24a-h2"], title: "Splitting Sums", text: "In this case, we will split the $$\\left(4\\right) t^2-\\left(1\\right)$$ into $$\\left(4\\right) t^2$$ and -1.", variabilization: {}}, {id: "poly24a-h4", type: "hint", dependencies: ["poly24a-h3"], title: "Multiplying Individual Terms", text: "Multiply each term from the split difference to the other $$\\frac{sum}{difference}$$.", variabilization: {}}, {id: "poly24a-h5", type: "hint", dependencies: ["poly24a-h4"], title: "Multiplying Individual Terms", text: "In this case, we will multiple $$\\left(4\\right) t^2$$ by $$\\left(4\\right) t^2+t-\\left(7\\right)$$ and -1 by $$\\left(4\\right) t^2+t-\\left(7\\right)$$", variabilization: {}}, {id: "poly24a-h6", type: "hint", dependencies: ["poly24a-h5"], title: "Adding Terms", text: "Add all the terms generated after both multiplications and simplify like terms", variabilization: {}}, {id: "poly24a-h7", type: "hint", dependencies: ["poly24a-h6"], title: "Adding Terms", text: "In this case, we will add $$\\left(16\\right) t^4$$, $$\\left(4\\right) t^3$$, $$-\\left(28\\right) t^2$$, $$-\\left(4\\right) t^2$$, -t, and 7.", variabilization: {}}, {id: "poly24a-h8", type: "hint", dependencies: ["poly24a-h7"], title: "Simplification", text: "Simplify like terms in the sum. Like terms are terms of the same degree.", variabilization: {}}, {id: "poly24a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16t^4+4t^3-32t^2-t+7"], dependencies: ["poly24a-h8"], title: "Simplification", text: "After simplification, what is the final polynomial result?", variabilization: {}}, ]; export {hints};