var hints = [{id: "MoApp4a-h1", type: "hint", dependencies: [], title: "Component of Total Expense", text: "The total expenses should be the sum of operating expenses, salaries and cost for producing the part.", variabilization: {}}, {id: "MoApp4a-h2", type: "hint", dependencies: ["MoApp4a-h1"], title: "Identify known quantities", text: "The known quantities are 2.50, 350 and 3,300.", variabilization: {}}, {id: "MoApp4a-h3", type: "hint", dependencies: ["MoApp4a-h2"], title: "Determine unknown quantities", text: "The unknown quantity in this problem is the number of this part produced.", variabilization: {}}, {id: "MoApp4a-h4", type: "hint", dependencies: ["MoApp4a-h3"], title: "Assign a variable", text: "Let x be the number of parts produced.", variabilization: {}}, {id: "MoApp4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2.5x+350+3300"], dependencies: ["MoApp4a-h4"], title: "Translation to Math Operations", text: "What is the mathematical form of the sum of this three components?", variabilization: {}}, {id: "MoApp4a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2.5x+3650"], dependencies: ["MoApp4a-h5"], title: "Simplify", text: "Simplify the linear equation", variabilization: {}}, ]; export {hints};