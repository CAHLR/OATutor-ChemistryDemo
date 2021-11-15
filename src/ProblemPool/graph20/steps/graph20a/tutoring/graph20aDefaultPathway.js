var hints = [{id: "graph20a-h1", type: "hint", dependencies: [], title: "Pairing Together Terms", text: "We can pair together the first and second terms and the second and third terms as shown. $$f(x)=x^3-3x^2+\\left(-x+3\\right)$$", variabilization: {}}, {id: "graph20a-h2", type: "hint", dependencies: ["graph20a-h1"], title: "Taking Out the Common Term", text: "We can now take out the common terms as shown: $$f(x)=x^{2\\left(x-3\\right)}-x-3$$", variabilization: {}}, {id: "graph20a-h3", type: "hint", dependencies: ["graph20a-h2"], title: "Joining Together Both Terms", text: "We can now join the whole equation into a single expression. $$f(x)=\\left(x^2-1\\right) \\left(x-3\\right)$$", variabilization: {}}, {id: "graph20a-h4", type: "hint", dependencies: ["graph20a-h3"], title: "Factoring the Quadratic", text: "Since $$x^2-1=\\left(x+1\\right) \\left(x-1\\right)$$, we can simplify the function to $$f(x)=\\left(x+1\\right) \\left(x-1\\right) \\left(x-3\\right)$$.", variabilization: {}}, {id: "graph20a-h5", type: "hint", dependencies: ["graph20a-h4"], title: "Solving for the Intercepts", text: "We must now solve for x by setting the whole equation to 0. $$0=\\left(x+1\\right) \\left(x-1\\right) \\left(x-3\\right)$$. This means that $$x=-1, 1$$, and 3. Our intercepts are thus: (-1,0),(1,0),(3,0)", variabilization: {}}, ]; export {hints};