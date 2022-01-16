var hints = [{id: "a104861trifactor22a-h1", type: "hint", dependencies: [], title: "Factor", text: "In this equation $${ax}^2+bx+c$$ the square root of a is 5", variabilization: {}}, {id: "a104861trifactor22a-h2", type: "hint", dependencies: ["a104861trifactor22a-h1"], title: "Factor Pt2.", text: "In the form $$\\left(px+o\\right) \\left(mx+n\\right)$$. To solve for o and n, they must multiply to the constant in the original equation and $$pn+om$$ is equal to b in $${ax}^2+bx+c$$.", variabilization: {}}, {id: "a104861trifactor22a-h3", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["4,1"], dependencies: ["a104861trifactor22a-h2"], title: "Solve", text: "What are the values of o and n? (Give answer with coma inbetween with the larger number first Ex. 4,2)", variabilization: {}}, {id: "a104861trifactor22a-h4", type: "hint", dependencies: [], title: "Plug in", text: "Plug in the calculated values into the simplified form", variabilization: {}}, ]; export {hints};