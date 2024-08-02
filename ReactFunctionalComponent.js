import React from "react";
import ReactDOM from "react-dom/client";
// we can access Componnet in another element and component

let myelement = (<h2 id="elementjsx" className="rfc">I am Just a Normal JSX Element to be used in RFC</h2>);

const FirstComponent = ()=>{
    // A RFC Is just a JS Function which retruns A ReactElement 
    return myelement 
}

const SecondComponent = ()=>{
    return (<div>
        <FirstComponent/>
        <h2>I am Element inside the secondComponent</h2>
    </div>)
}

const ThirdComponent =()=>{
    return (<div id="ThirdComponent">
        <FirstComponent/>
        <SecondComponent />  
        <h2>I am of Third Component</h2>
    </div>)
}

const masterElem = (<div id="masterelem">
    {<ThirdComponent/>}
    <h2>Hello Master Element</h2></div>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(masterElem)
// root.render(<FirstComponent></FirstComponent>)
//root.render(FirstComponent())