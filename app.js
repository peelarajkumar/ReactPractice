import React from "react";
import ReactDOM from "react-dom/client"


const header = React.createElement("h1",{"id":"root","value":"Raj"},"My Name is Raj Kumar !!")
const childers = React.createElement("div",{"id":"parentdiv"},[React.createElement("h1",{"id":"child1"},"First Child is here"),React.createElement("h1",{"id":"child2"},"Second Child"),React.createElement("h1",{"id":"child3"},"Third Child")]);
const JSXHead = <h1 id="jsxheading">Hi I AM JSX Heading</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHead);