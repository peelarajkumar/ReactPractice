import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";
import FooterComponent from "./Footer";
import Ottapps from "../OttAPI/Ottapps";
import { useState } from "react";

 

// head component
//body component
// footer component
// MasterComponent

const MasterComponent = ()=>{

    let [allOttApps,setallOttApps] = useState(Ottapps.ottApps);
    console.log(allOttApps);

    const filterOtts =()=>{
        let expensiveApps = Ottapps.ottApps.filter(item=>{
            let isexpapp = parseFloat(item.price.replace(/[^0-9.]/g, ''))
              return isexpapp>6;
        })
        setallOttApps(expensiveApps);
        console.log(expensiveApps);
    }

    
    var filterButton = <button className="expApps" onClick={filterOtts} >Expensive Otts Apps</button>

    let master = (<div id="master">
        <HeaderComponent/>
        <span className="flt-btn">{filterButton}</span>
        <div id="ottcards">
        {allOttApps.map((item, index) => (
    <BodyComponent key ={index} ottapps={item} />
))}</div>
        <FooterComponent/>
    </div>)

    return master

}

const root  = ReactDom.createRoot(document.getElementById("root"));
root.render(<MasterComponent/>)




