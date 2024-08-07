import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";
import FooterComponent from "./Footer";
import Ottapps from "../OttAPI/Ottapps";
import { useState , useEffect} from "react";

// head component
//body component
// footer component
// MasterComponent

const MasterComponent = ()=>{

    let [allOttApps,setallOttApps] = useState(Ottapps.ottApps);
    console.log(allOttApps);
        const fetchAPI = async()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await data.json();
            console.log(response);
        }
    useEffect(()=>{ // useEffect executes after the rendering of the Component is done !
        fetchAPI();
    },[])

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




