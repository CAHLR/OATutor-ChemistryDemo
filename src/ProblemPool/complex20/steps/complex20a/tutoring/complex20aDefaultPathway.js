var hints = [{id: "complex20a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2i*sqrt(3)"], dependencies: [], title: "Standard Form", text: "Write $$\\sqrt{\\left(\\-1\\right)2}$$ in standard form: $$a+bi$$."}, {id: "complex20a-h2", type: "hint", dependencies: ["complex20a-h1"], title: "Comverting Division into Multiplication", text: "Write the division as multiplying by a fraction."}, {id: "complex20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/2"], dependencies: ["complex20a-h2"], title: "Comverting Division into Multiplication", text: "What is the fraction such that multiplying by this fraction is equivalent to dividing by 2?"}, {id: "complex20a-h4", type: "hint", dependencies: ["complex20a-h3"], title: "Distributive Property", text: "Distribute the $$\\frac{1}{2}$$ to each term in the complex number."}, {id: "complex20a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["complex20a-h4"], title: "Distributive Property", text: "What is $$\\left(2\\right) \\frac{1}{2}$$?"}, {id: "complex20a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["i(sqrt(3))"], dependencies: ["complex20a-h4"], title: "Distributive Property", text: "What is $$\\left(2\\right) i \\sqrt{3} \\frac{1}{2}$$?"}, {id: "complex20a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1+i(sqrt(3))"], dependencies: ["complex20a-h5", "complex20a-h6"], title: "Adding Complex Numbers", text: "Add the terms in the numerator. What expression do you get?"}, ]; export {hints};