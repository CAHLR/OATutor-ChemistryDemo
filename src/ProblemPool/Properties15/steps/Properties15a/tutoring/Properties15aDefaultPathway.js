var hints = [{id: "Properties15a-h1", type: "hint", dependencies: [], title: "Distributive Property", text: "Observing this question, we find that we will need to apply the distributive property twice, once for each of the parentheses."}, {id: "Properties15a-h2", type: "hint", dependencies: ["Properties15a-h1"], title: "Distributive Property", text: "The distributive property states that if a, b, c are real numbers, then $$a \\left(b+c\\right)=ab+ac$$, and $$a \\left(b-c\\right)=ab-ac$$."}, {id: "Properties15a-h3", type: "hint", dependencies: ["Properties15a-h2"], title: "Applying the Distributive Property", text: "Applying the distributive property to $$\\left(6\\right) \\left(\\left(7\\right) y+\\left(8\\right)\\right)$$, we get the expression $$\\left(6\\right) \\left(7\\right) y+\\left(6\\right) \\left(8\\right)$$."}, {id: "Properties15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["42y"], dependencies: ["Properties15a-h3"], title: "Multiplying", text: "What is $$\\left(6\\right) \\left(7\\right) y$$?"}, {id: "Properties15a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["48"], dependencies: ["Properties15a-h3"], title: "Multiplying", text: "What is $$\\left(6\\right) \\left(8\\right)$$?"}, {id: "Properties15a-h6", type: "hint", dependencies: ["Properties15a-h4", "Properties15a-h5"], title: "First Expression", text: "Putting together the previous two parts, we get $$\\left(6\\right) \\left(\\left(7\\right) y+\\left(8\\right)\\right)=\\left(42\\right) y+\\left(48\\right)$$."}, {id: "Properties15a-h7", type: "hint", dependencies: ["Properties15a-h2"], title: "Applying the Distributive Property", text: "Applying the distributive property to -(30y-15), we get the expression $$-\\left(1\\right) \\left(30\\right) y-\\left(\\-1\\right) \\left(15\\right)$$ (remember that -(30y-15) can be written as (-1)*(30y-15))."}, {id: "Properties15a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-30y"], dependencies: ["Properties15a-h7"], title: "Multiplying", text: "What is $$\\left(\\-1\\right) \\left(30\\right) y$$?"}, {id: "Properties15a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-15"], dependencies: ["Properties15a-h7"], title: "Multiplying", text: "What is $$\\left(\\-1\\right) \\left(15\\right)$$?"}, {id: "Properties15a-h10", type: "hint", dependencies: ["Properties15a-h8", "Properties15a-h9"], title: "Second Expression", text: "Putting together the previous two parts, we get $$-(30y-15)=-30y-(-15)=-\\left(30\\right) y+\\left(15\\right)$$."}, {id: "Properties15a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12y+63"], dependencies: ["Properties15a-h6", "Properties15a-h10"], title: "Combine Like Terms", text: "After applying the distributive property, the expression becomes $$\\left(42\\right) y+\\left(48\\right)-\\left(30\\right) y+\\left(15\\right)$$. Combine like terms, what do you get?"}, ]; export {hints};