const BodyComponent =(props)=>{
    let body =(<div id="body">
        <div id="card">
            <img className="CardsLogo" alt="Netflix" src={props.ottapps.imgUrl}></img>
            <p> PlatForm Name : {props.ottapps.name}</p>
            <p>Platform Price :{props.ottapps.price}</p>
            <p>Available Countries : {props.ottapps.countries.map((item,index)=><span key={index}>{item+" "}</span>)}</p>
            <p>Supported Devices :{props.ottapps.devices.map((item,index)=><span key={index}>{item+" | "}</span>)}</p>
        </div>
    </div>)
    return body;
}

export default BodyComponent;