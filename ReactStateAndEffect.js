import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";



let staticnames = [
    "Dominos",
    "KFC",
    "Pizza Hut",
    "Subway"
]

let APINames;

const MasterComponent= ()=>{

    let [Names,SetNames] = useState(staticnames); // Initially the page will load with Static Data

    const getAPIData = ()=>{
        setDynamicAPI();
       }

      const getStaticData = () =>{
        SetNames(staticnames);
      }

      useEffect(()=>{
        setDynamicAPI();  // This function is triggered once the component is rendered !
      },[])

       async function setDynamicAPI(){

        try{
         const APIdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          if(!APIdata.ok){
             console.log("Response is Not Okay")
          }
          const ResNames = await APIdata.json();
           APINames = ResNames.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
           APINames = APINames.map(item=>item.info.name)
           SetNames(APINames);
        }
        catch(error){
              console.log("API Failed "+error)
        }    
            }

    return(<div id="masetrComponent"><h1>The restaurants are :</h1>
    <div className="restnameslist">
        {Names.map((item,index)=>(<h2 key={index}><NamesComp key={index} name={item}/></h2>))}
        </div>
        <button onClick={()=>getAPIData()} className="Sendbtn"> API Data</button>
        <button onClick={()=>getStaticData()} className="Sendbtn"> Static Data</button>
        </div>)

}

const NamesComp = (props)=>{
    return(<div id="NamesDiv"><h3 className="NamesItem">{props.name}</h3></div>)
}






const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MasterComponent/>);