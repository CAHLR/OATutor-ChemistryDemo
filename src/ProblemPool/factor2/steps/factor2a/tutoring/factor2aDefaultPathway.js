var hints = [{id: "factor2a-h1", type: "hint", dependencies: [], title: "Greatest Common Factor", text: "The greatest common factor (GCF) of two numbers is the largest number that divides evenly into both numbers.", variabilization: {}}, {id: "factor2a-h2", type: "hint", dependencies: ["factor2a-h1"], title: "Example of a GCF", text: "4 is the GCF of 16 and 20 because it is the largest number that divides evenly into both 16 and 20.", variabilization: {}}, {id: "factor2a-h3", type: "hint", dependencies: ["factor2a-h2"], title: "Factor of Expression", text: "$$b^2-a$$ divides evenly into both terms.", variabilization: {}}, {id: "factor2a-h4", type: "hint", dependencies: ["factor2a-h3"], title: "Example of Factoring", text: "$$\\operatorname{y}\\left(x+\\left(2\\right)\\right)$$ + $$\\operatorname{3}\\left(x+\\left(2\\right)\\right)$$ $$=$$ $$\\left(y+\\left(3\\right)\\right) \\left(x+\\left(2\\right)\\right)$$, in which the GCF of the original expression is $$x+\\left(2\\right)$$.", variabilization: {}}, ]; export {hints};