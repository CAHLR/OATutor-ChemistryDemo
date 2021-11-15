var hints = [{id: "addand19a-h1", type: "hint", dependencies: [], title: "LCD", text: "We need to rewrite each fraction with the least common denominator because they don't have a common denominator to start with.", variabilization: {}}, {id: "addand19a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["48"], dependencies: ["addand19a-h1"], title: "LCD", text: "What is the LCD of 12 and 16 $$(12=2\\times2\\times3$$ and 16=2*2*2*2)?", variabilization: {}}, {id: "addand19a-h3", type: "hint", dependencies: ["addand19a-h2"], title: "Rewrite", text: "We then need to change into equivalent fractions with the LCD, 48.", variabilization: {}}, {id: "addand19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{28}{48}$$"], dependencies: ["addand19a-h3"], title: "Rewrite", text: "What should $$\\frac{7}{12}$$ be changed into with the LCD, 48?", variabilization: {}}, {id: "addand19a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{27}{48}$$"], dependencies: ["addand19a-h4"], title: "Rewrite", text: "What should $$\\frac{9}{16}$$ be changed into with the LCD, 48?", variabilization: {}}, {id: "addand19a-h6", type: "hint", dependencies: ["addand19a-h5"], title: "Subtract", text: "Subtract the numerators and place the difference over the common denominator.", variabilization: {}}, {id: "addand19a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["addand19a-h6"], title: "Numerator", text: "What do we get for the numerator after the subtraction?", variabilization: {}}, {id: "addand19a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{48}$$"], dependencies: ["addand19a-h7"], title: "Final Answer", text: "What do we get after placing the difference over the common denominator?", variabilization: {}}, ]; export {hints};