var hints = [{id: "af227bbMoApp3b-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "The known quantities are 40 and 0.04.", variabilization: {}}, {id: "af227bbMoApp3b-h2", type: "hint", dependencies: ["af227bbMoApp3b-h1"], title: "Determine unknown quantities", text: "The unknown quantity in this problem is the talk-time.", variabilization: {}}, {id: "af227bbMoApp3b-h3", type: "hint", dependencies: ["af227bbMoApp3b-h2"], title: "Assign a variable", text: "Let x equal the talk-time.", variabilization: {}}, {id: "af227bbMoApp3b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$0.04x+40$$"], dependencies: ["af227bbMoApp3b-h3"], title: "Translation to Math Operations", text: "What is the mathematical form of \"a monthly service fee of $40 plus $.04/min talk-time\"?", variabilization: {}}, ]; export {hints};