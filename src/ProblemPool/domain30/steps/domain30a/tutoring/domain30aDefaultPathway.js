var hints = [{id: "domain30a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A rational function is undefined when the denominator is equal to zero. So, let's start by setting the denominator equal to zero. Then we know every value other than that is a solution. (We can ignore the numerator since there is no value where it is undefined!)"}, {id: "domain30a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=-112$$,"], dependencies: ["domain30a-h1"], title: "Solving For the Domain", text: "What is x for $$x^2+\\left(9\\right) x-\\left(22\\right)=0$$?", choices: ["$$x=-2$$", "$$x=-11$$", "$$x=-211$$,", "$$x=-112$$,"], subHints: [{id: "domain30a-h2-s1", type: "hint", dependencies: [], title: "Solving For the Domain", text: "For $$x^2+\\left(9\\right) x-\\left(22\\right)=0$$, factor the equation to get $$\\left(x+\\left(11\\right)\\right) \\left(x-\\left(2\\right)\\right)$$. Set these two expressions equal to zero to get that $$x=-11$$ or $$x=2$$."}]}, {id: "domain30a-h3", type: "hint", dependencies: ["domain30a-h2"], title: "Answer", text: "So, the function is defined for every value other than -11 and 2.The domain of the function is $$(-\\infty,-11) \\cup (-11,2) \\cup (2,\\infty),$$ with the circle brackets denoting the fact that -11 and 2 are not valid solutions, and the U showing that values within the intervals are solutions."}, ]; export {hints};