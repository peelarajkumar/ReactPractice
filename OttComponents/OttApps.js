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

let APINames;
let FinalApiNames =[];
var NewOttapps = {
    "ottApps":[]
}
let updatedOttapps ;

const MasterComponent = ()=>{

    const swiggyMode = ()=>{
        fetchAPI();
    }

    let [allOttApps,setallOttApps] = useState(Ottapps);
        const fetchAPI = async()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await data.json();
            APINames = response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            APINames = APINames.map(item=>item.info)
            updatedOttapps = {
                ottApps: APINames.map(item => ({
                    name: item.name,
                    price: item.costForTwo,
                    devices: [item.locality, item.areaName],
                    countries: item.cuisines,
                    imgUrl: "https://techstory.in/wp-content/uploads/2020/10/swiggy.jpg"
                }))
            };
        
            setallOttApps(updatedOttapps);
        
        }
    // useEffect(()=>{ // useEffect executes after the rendering of the Component is done !
    //     fetchAPI();
    // },[])

    const filterOtts =()=>{
        
        let expensiveApps = Ottapps.ottApps.filter(item=>{
            let isexpapp = parseFloat(item.price.replace(/[^0-9.]/g, ''))
              return isexpapp>6;
        })
        NewOttapps.ottApps=expensiveApps;
        setallOttApps(NewOttapps);
    }

    const filteredNames = () =>{
        //
        let searchName = document.getElementById('searchName').value;

        let swiggyfiltercards = updatedOttapps.ottApps.filter(item=>(item.name).includes(searchName));
        
        let NewSwiggyapps = {
            "ottApps":[]
        }
        NewSwiggyapps.ottApps = swiggyfiltercards;
        setallOttApps(NewSwiggyapps);

    }

   

    
    var Search = <input id="searchName" className="search-input" type="text" placeholder="Search ..."></input>

    var filterButton = <button className="expApps" onClick={filterOtts} >Expensive Otts Apps</button>

    var SwiggyButton = <button className="swiggybtn" onClick={()=>swiggyMode()}>Swiggy Mode</button>

    let master = (<div id="master">
        <HeaderComponent/>
        <span className="flt-btn">{filterButton}</span>
        <span className="flt-btn">{SwiggyButton}</span>
        <div id="search" >{Search} 
            <span> <button onClick={()=>filteredNames()} className="Sendbtn"> Search </button></span>
        </div>
        <div id="ottcards">
        {allOttApps.ottApps.map((item, index) => (
    <BodyComponent key ={index} ottapps={item} />
))}</div>
        <FooterComponent/>
    </div>)

    return master

}

const root  = ReactDom.createRoot(document.getElementById("root"));
root.render(<MasterComponent/>)




