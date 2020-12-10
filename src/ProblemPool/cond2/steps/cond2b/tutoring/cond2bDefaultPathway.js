var hints = [{id: "cond2b-h1", type: "hint", dependencies: [], title: "Sample Spaces", text: "Let B1 denote the event \"first marble is black,\" B2 denote the event \"second marble is black,\" W1 denote the event \"first marble is white,\" and W2 denote the event \"second marble is white.\""}, {id: "cond2b-h2", type: "hint", dependencies: ["cond2b-h1"], title: "P(One Black Marble)", text: "The event \"exactly one marble is black\" corresponds to either drawing black first, then white, or drawing white first, then black. So, the probability of drawing exactly one black marble is P(B1$$\cap$$W2)+P(W1$$\cap$$B2)"}, {id: "cond2b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7/30"], dependencies: ["cond2b-h2"], title: "P(B1$$\cap$$W2)", text: "What is the probability that the first marble is black AND the second marble is white?", subHints: [{id: "cond2b-h3-s1", type: "hint", dependencies: [], title: "P(B1$$\cap$$W2)", text: "P(B1$$\cap$$W2)=P(W2$$\\mid$$B1)*P(B1)"}, {id: "cond2b-h3-s2", type: "hint", dependencies: ["cond2b-h3-s1"], title: "P(B1)", text: "When the first marble is drawn, 7 marbles are black out of the 10 possible marbles chosen. Therefore, the probability of drawing a black marble is $$\\frac{7}{10}$$"}, {id: "cond2b-h3-s3", type: "hint", dependencies: ["cond2b-h3-s2"], title: "P(W2$$\\mid$$B1)", text: "When the second marble is drawn, 3 marbles are white out of the 9 possible marbles chosen. Therefore, the probability of drawing a white marble is $$\\frac{3}{9}$$"}, {id: "cond2b-h3-s4", type: "hint", dependencies: ["cond2b-h3-s3"], title: "P(B1$$\cap$$W2)", text: "P(B1$$\cap$$W2)=P(W2$$\\mid$$B1)*P(B1)=(3/9)*(7/10)=21/90=7/30"}]}, {id: "cond2b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7/30"], dependencies: ["cond2b-h2"], title: "P(W1$$\cap$$B2)", text: "What is the probability that the first marble is white AND the second marble is black?", subHints: [{id: "cond2b-h4-s1", type: "hint", dependencies: [], title: "P(W1$$\cap$$B2)", text: "P(W1$$\cap$$B2)=P(B2$$\\mid$$W1)*P(W1)"}, {id: "cond2b-h4-s2", type: "hint", dependencies: ["cond2b-h4-s1"], title: "P(W1)", text: "When the first marble is drawn, 3 marbles are white out of the 10 possible marbles chosen. Therefore, the probability of drawing a white marble is $$\\frac{3}{10}$$"}, {id: "cond2b-h4-s3", type: "hint", dependencies: ["cond2b-h4-s2"], title: "P(B2$$\\mid$$W1)", text: "When the second marble is drawn, 7 marbles are black out of the 9 possible marbles chosen. Therefore, the probability of drawing a black marble is $$\\frac{7}{9}$$"}, {id: "cond2b-h4-s4", type: "hint", dependencies: ["cond2b-h4-s3"], title: "P(W1$$\cap$$B2)", text: "P(W1$$\cap$$B2)=P(B2$$\\mid$$W1)*P(W1)=(7/9)*(3/10)=21/90=7/30"}]}, {id: "cond2b-h5", type: "hint", dependencies: ["cond2b-h3", "cond2b-h4"], title: "P(One Black Marble)", text: "P(B1$$\cap$$W2)+P(W1$$\cap$$B2)=(7/30)+(7/30)=14/30=7/15"}, ]; export {hints};