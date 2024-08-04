import React , {useState} from "react";
import ReactDom from "react-dom/client";



const FirstComponent = ()=>{

let [names , setnames] = useState(["raj","ravi","Aks"]);


    return(<div id="FirstComponent">
        {names.map((item,index)=>(<Names  key = {index} item={item}/>))}
        <button onClick={()=>setnames(["Mon","Tues","Wed","Thurs"])} id="clickMe">Click Me</button>
    </div>)
}

const Names = (props)=>{
return (<div><h1>{props.item}</h1></div>)
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<FirstComponent/>)