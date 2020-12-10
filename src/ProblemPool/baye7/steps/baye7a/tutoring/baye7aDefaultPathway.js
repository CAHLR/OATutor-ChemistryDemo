var hints = [{id: "baye7a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\\mid$$B)=P(A)P(B$$\\mid$$A)/P(B)"}, {id: "baye7a-h2", type: "hint", dependencies: ["baye7a-h1"], title: "Events", text: "Let H be the hypothesis \"your door has a car behind it,\" and E be the evidence that Monty has revealed a door with a goat behind it. Then the problem can be restated as calculating P(H$$\\mid$$E)=P(H)P(E$$\\mid$$H)/P(E)"}, {id: "baye7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["baye7a-h2"], title: "P(H)", text: "What is the probability that your door has a car behind it before Monty reveals a goat? Enter your answer as a fraction", subHints: [{id: "baye7a-h3-s1", type: "hint", dependencies: [], title: "P(H)", text: "Without knowing about the door that Monty reveals, there are 3 possible doors and your door is just 1 of them. Thus P(H) is $$\\frac{1}{3}$$"}]}, {id: "baye7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["baye7a-h3"], title: "P(E$$\\mid$$H)", text: "What is the probability that Monty shows a door with a goat behind it, given that there is a car behind your door?", subHints: [{id: "baye7a-h4-s1", type: "hint", dependencies: [], title: "P(E$$\\mid$$H)", text: "Since Monty always shows a door with a goat, the probability that Monty shows a door with a goat behind it, given that there is a car behind your door, is 1"}]}, {id: "baye7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["baye7a-h4"], title: "P(E)", text: "What is the probability that Monty shows a door with a goat behind it?", subHints: [{id: "baye7a-h5-s1", type: "hint", dependencies: [], title: "P(E)", text: "Since Monty always shows a door with a goat, the probability that Monty shows a door with a goat behind it is 1"}]}, {id: "baye7a-h6", type: "hint", dependencies: ["baye7a-h5"], title: "P(H$$\\mid$$E)", text: "Use P(H), P(E$$\\mid$$H), and P(E) to solve for P(H$$\\mid$$E) using Bayes' Theorem"}, {id: "baye7a-h7", type: "hint", dependencies: ["baye7a-h6"], title: "P(H$$\\mid$$E)", text: "P(H$$\\mid$$E)=P(H)P(E$$\\mid$$H)/P(E)=((1/3)*1)/1=1/3"}, ]; export {hints};