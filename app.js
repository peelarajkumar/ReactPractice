const header = React.createElement("h1",{"id":"root","value":"Raj"},"My Name is Raj")
const childers = React.createElement("div",{"id":"parentdiv"},[React.createElement("h1",{"id":"child1"},"First Child"),React.createElement("h1",{"id":"child2"},"Second Child"),React.createElement("h1",{"id":"child3"},"Third Child")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(childers);