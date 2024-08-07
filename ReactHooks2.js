import React , {useState} from "react";
import ReactDom from "react-dom/client";

let names = ["Raj","Ravi"]

const HooksComponent = ()=>{

function ChangeNames(){
    let changedNames = names.map(item=>item+" Developer");
    setNames(changedNames); //- setNames is used for changing the state/component ui 
}
    let [Names,setNames] = useState(names); // a super power variable - react state variable using useState();
    return(<div id="HooksDiv">
    {Names.map((item,index)=>(<h1 key={index} id="dynnames">{item}</h1>))}
        <button onClick={()=>ChangeNames()} id="click">Change Name</button>
    </div>)
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HooksComponent/>)