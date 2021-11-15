var hints = [{id: "a372017cramer18a-h1", type: "hint", dependencies: [], title: "Cramer's Rule for 2x2 Systems", text: "Cramer’s Rule is a method that uses determinants to solve systems of equations that have the same number of equations as variables. \\n Consider a system of two linear equations in two variables. \\n $$a_1 x+b_1 y=c_1$$ \\n $$a_2 x+b_2 y=c_2$$ \\n \\n The solution using Cramer's Rule is given as \\n $$x=\\frac{D_x}{D}=$$ |(c_1,b_1),(c_2,b_2)|/|(a_1,b_1),(a_2,b_2)|, $$D!=0;$$ \\n $$y=\\frac{D_y}{D}=$$ |(a_1,c_1),(a_2,c_2)|/|(a_1,b_1),(a_2,b_2)|, $$D!=0;$$ \\n If we are solving for x, the x column is replaced with the constant column. If we are solving for y, the y column is replaced with the constant column.", variabilization: {}}, {id: "a372017cramer18a-h2", type: "hint", dependencies: ["a372017cramer18a-h1"], title: "Determinant of 2x2 Matrix", text: "The determinant of a 2×2 matrix, given $$A=\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$$ is defined as $$det(A)=a d-c b$$.", variabilization: {}}, {id: "a372017cramer18a-h3", type: "hint", dependencies: ["a372017cramer18a-h2"], title: "Solve for x", text: "Using the Cramer's Rule, replace the column for x with the constant column, then find the determinant of $$D_x$$ and D to solve for $$x=\\frac{D_x}{D}$$.", variabilization: {}}, {id: "a372017cramer18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["a372017cramer18a-h3"], title: "Solve for x", text: "Find the determinant $$D_x$$ $$=$$ |(-11,2),(-13,1)|?", variabilization: {}}, {id: "a372017cramer18a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a372017cramer18a-h4"], title: "Solve for x", text: "Find the determinant D $$=$$ |(1,2),(-2,1)|?", variabilization: {}}, {id: "a372017cramer18a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["a372017cramer18a-h5"], title: "Solve for x", text: "What is $$\\frac{D_x}{D}$$?", variabilization: {}}, {id: "a372017cramer18a-h7", type: "hint", dependencies: ["a372017cramer18a-h6"], title: "Solve for y", text: "Using the Cramer's Rule, replace the column for y with the constant column, then find the determinant of $$D_y$$ and D to solve for $$y=\\frac{D_y}{D}$$.", variabilization: {}}, {id: "a372017cramer18a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-35"], dependencies: ["a372017cramer18a-h7"], title: "Solve for y", text: "Find the determinant $$D_y$$ $$=$$ |(1,-11),(-2,-13)|?", variabilization: {}}, {id: "a372017cramer18a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a372017cramer18a-h8"], title: "Solve for y", text: "Find the determinant D $$=$$ |(1,2),(-2,1)|?", variabilization: {}}, {id: "a372017cramer18a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7"], dependencies: ["a372017cramer18a-h9"], title: "Solve for y", text: "What is $$\\frac{D_y}{D}$$?", variabilization: {}}, ]; export {hints};