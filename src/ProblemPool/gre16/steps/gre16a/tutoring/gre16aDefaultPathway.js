var hints = [{id: "gre16a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre16a-h2", type: "hint", dependencies: ["gre16a-h1"], title: "Factor First Expression", text: "$$8a^2 b^3=2\\times2\\times2 a a b b b$$", variabilization: {}}, {id: "gre16a-h3", type: "hint", dependencies: ["gre16a-h2"], title: "Factor Second Expression", text: "$$10a b^2=5\\times2 a b b$$", variabilization: {}}, {id: "gre16a-h4", type: "hint", dependencies: ["gre16a-h2", "gre16a-h3"], title: "Identify Common Factors in each Column", text: "$$8a^2 b^3=2\\times2\\times2 a a b b b$$ $$10a b^2=5\\times2 a b b$$ 2, a, b, and b are shared by both expressions.", variabilization: {}}, {id: "gre16a-h5", type: "hint", dependencies: ["gre16a-h4"], title: "Multiply Common Factors", text: "Bring down the 2, a, b, and b, and then multiply. $$GCF=2a b b$$", variabilization: {}}, {id: "gre16a-h6", type: "hint", dependencies: ["gre16a-h5"], title: "Multiply Common Factors", text: "$$GCF=2a b^2$$", variabilization: {}}, ]; export {hints};