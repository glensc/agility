// One-liners: one item
var hello = $$('Hello World', '<div>${content}</div>'); // == $$({content:'Hello World'}, '<div>${content}</div>');
$$doc = $$.document.add(hello); // two things: 1) $$.document.tree[0] now exists and == hello; 2) $$.document's add() handler will by default append given element to <body>
// hello.model({content: "mamma"}); // setter: calls change(), which by default maps to render(), which by default uses $.tmpl()
