var hints = [{id: "expolog2a-h1", type: "hint", dependencies: [], title: "Identifying the Formula", text: "What is the continuous growth formula?", variabilization: {}}, {id: "expolog2a-h2", type: "hint", dependencies: ["expolog2a-h1"], title: "Solve for k", text: "Analyze the formula with substituted values and take the necessary steps to solve for k", variabilization: {}}, {id: "expolog2a-h3", type: "hint", dependencies: ["expolog2a-h2"], title: "Substitute Known Values", text: "Substitute the half life for t and and $$\\left(0.5\\right) A_0$$ for f(t)", variabilization: {}}, {id: "expolog2a-h4", type: "hint", dependencies: ["expolog2a-h3"], title: "Eliminate Variable", text: "Divide both side by $$A_0$$", variabilization: {}}, {id: "expolog2a-h5", type: "hint", dependencies: ["expolog2a-h4"], title: "Using Natural Log", text: "Take the natural log of both sides", variabilization: {}}, {id: "expolog2a-h6", type: "hint", dependencies: ["expolog2a-h5"], title: "Finding k", text: "Divide by the coefficient of k on both sides", variabilization: {}}, {id: "expolog2a-h7", type: "hint", dependencies: ["expolog2a-h6"], title: "Final Formula", text: "Substitute final value for k as the rate in the continuous growth formula", variabilization: {}}, ]; export {hints};