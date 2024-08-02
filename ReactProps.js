import React from "react";
import ReactDOM from "react-dom/client";

// A props is nothing but passing arguments to a component !
// props to component is like args to a function
//props (Properties) can be anything , they wrapped as object and can be used inside the component

const MyReactComponent = (props)=>{
    console.log(props)
    return(
        <div>
            <h1>Hello User - {props.name}</h1>
            <h1><span>You came at {new Date().toLocaleString()} </span></h1>
            <h2><span>You are {props.age} Years old</span></h2>
        </div>
    )
}

const AppCompoennt = ()=>{
    return (<div>
        <MyReactComponent name = "raj" age ="25"/>
        <MyReactComponent name ="Kumar" age="20" />
    </div>)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppCompoennt/>)