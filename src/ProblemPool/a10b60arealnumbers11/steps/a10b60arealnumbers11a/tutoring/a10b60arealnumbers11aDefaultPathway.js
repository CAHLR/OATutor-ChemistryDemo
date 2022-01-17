var hints = [{id: "a10b60arealnumbers11a-h1", type: "hint", dependencies: [], title: "Quotient Property of nth Roots", text: "$$\\sqrt[n]{\\frac{a}{b}}$$ is equivalent to $$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$ as long as the nth roots of a and b are real, b isn't 0, and n $$ \\geq $$ 2", variabilization: {}}, {id: "a10b60arealnumbers11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\sqrt[3]{-54}$$"], dependencies: ["a10b60arealnumbers11a-h1"], title: "Simplifying to one Root", text: "What is $$\\frac{\\sqrt[3]{-108}}{\\sqrt[3]{2}}$$ rewritten in the form $$\\sqrt[3]{x}$$?", variabilization: {}}, {id: "a10b60arealnumbers11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-54"], dependencies: ["a10b60arealnumbers11a-h2"], title: "Simplifying to one Root", text: "What is $$\\frac{-108}{2}$$", variabilization: {}}, {id: "a10b60arealnumbers11a-h4", type: "hint", dependencies: ["a10b60arealnumbers11a-h3"], title: "Using Exponent Rules to Simplify Further", text: "Once we have a root in the form $$\\sqrt[3]{x}$$, we can use the product property to rewrite the root in the form sqrt(3,y**3)*sqrt( 3,z) such that $$y^3 z$$ is equal to x", variabilization: {}}, {id: "a10b60arealnumbers11a-h5", type: "hint", dependencies: ["a10b60arealnumbers11a-h4"], title: "How to Split the Root", text: "We want an anwer in the form sqrt(3,y**3)*sqrt( 3,z) because this can be simplified to $$y \\sqrt[3]{z}$$", variabilization: {}}, {id: "a10b60arealnumbers11a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-54"], dependencies: ["a10b60arealnumbers11a-h5"], title: "Splitting the Root", text: "What is $$2{\\left(-3\\right)}^3$$ equal to?", variabilization: {}}, ]; export {hints};