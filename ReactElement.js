import React from "react";
import ReactDOM from "react-dom/client";

// we can access elemnt in another element and component

const normalElement = React.createElement("h1",{"id":"normalhead"},"I am Just Normal Element");

const JSXelement = ([<h1 id="JSX Elemet">I Am JSX Header Element !</h1>,<h2> I am smaller elelemt</h2>]);

const childElement = (<h1 id="childelem">I am Child Element</h1>)

const parentElement = ( <div>{[childElement,JSXelement]} <h1 id="parentelem">I am a Parent Element</h1> </div>)


//JSX => Babel => React.createElement => renders (root.render) => HTML Element

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentElement);