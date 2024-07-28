import React from "react";
import ReactDOM from "react-dom/client";

const normalElement = React.createElement("h1",{"id":"normalhead"},"I am Just Normal Element");

const JSXelement = ([<h1 id="JSX Elemet">I Am JSX Header Element !</h1>,<h2> I am smaller elelemt</h2>]);


//JSX => Babel => React.createElement => renders (root.render) => HTML Element

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(JSXelement);