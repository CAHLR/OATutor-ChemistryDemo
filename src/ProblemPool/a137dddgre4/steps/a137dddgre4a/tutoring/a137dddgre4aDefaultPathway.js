var hints = [{id: "a137dddgre4a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "a137dddgre4a-h2", type: "hint", dependencies: ["a137dddgre4a-h1"], title: "Factor First Number", text: "$$72=\\left(8\\right) \\left(9\\right)$$ $$72=\\left(4\\right) \\left(2\\right) \\left(3\\right) \\left(3\\right)$$ $$72=\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(3\\right)$$", variabilization: {}}, {id: "a137dddgre4a-h3", type: "hint", dependencies: ["a137dddgre4a-h2"], title: "Factor Second Number", text: "$$162=\\left(2\\right) \\left(81\\right)$$ $$40=\\left(2\\right) \\left(9\\right) \\left(9\\right)$$ $$40=\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(3\\right) \\left(3\\right)$$", variabilization: {}}, {id: "a137dddgre4a-h4", type: "hint", dependencies: ["a137dddgre4a-h2", "a137dddgre4a-h3"], title: "Identify Common Factors in each Column", text: "$$72=\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(3\\right)$$ $$40=\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(3\\right) \\left(3\\right)$$ 2, 3, and 3 are shared by both numbers.", variabilization: {}}, {id: "a137dddgre4a-h5", type: "hint", dependencies: ["a137dddgre4a-h4"], title: "Multiply Common Factors", text: "Bring down the 2, 3, and 3, and then multiply. $$GCF=\\left(2\\right) \\left(3\\right) \\left(3\\right)$$", variabilization: {}}, {id: "a137dddgre4a-h6", type: "hint", dependencies: ["a137dddgre4a-h5"], title: "Multiply Common Factors", text: "$$GCF=18$$", variabilization: {}}, ]; export {hints};