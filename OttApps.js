import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./OttComponents/Header";
import BodyComponent from "./OttComponents/Body";
import FooterComponent from "./OttComponents/Footer";
import Ottapps from "./OttAPI/Ottapps";
 

// head component
//body component
// footer component
// MasterComponent

const MasterComponent = ()=>{
    let master = (<div id="master">
        <HeaderComponent/>
        <div id="ottcards">
        {Ottapps.ottApps.map((item, index) => (
    <BodyComponent key ={index} ottapps={item} />
))}</div>
        <FooterComponent/>
    </div>)
    return master;
}

const root  = ReactDom.createRoot(document.getElementById("root"));
root.render(<MasterComponent/>)




