import react, { useEffect, useState } from "react";

const Show =()=>{
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState('Mumbai');
    useEffect(()=>{
        const fetchApi =async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=53d2942fd391e9ffb919a20309434c15`;
            const response= await fetch(url);
            // console.log(response);
            const responsejson= await response.json();
            setcity(responsejson.main);
        }
        fetchApi();
    },[search])
    console.log(city);
    return (
        <div>
        <div className="nav">
            <h1 className="heading">Weather App</h1>
        </div>
        <div className="takeinput">
            <input placeholder="Enter City Name" type="search" onChange={(event)=>{
                setsearch(event.target.value)
            }}></input>
        </div>
        {
            !city ? (<div className="notfound"><p>Data not found</p></div>):(
           <div>     
        <div className="data">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsX6xMfTOxKrGk-ZwXhBDTgjM0ApO5YsGXg&usqp=CAU"></img>
        <div className="cit">
        <h1 className="cityname">{search}</h1>
        <h2>Temperature: {(city.temp-273.0).toFixed(2)}</h2>
        </div>
        </div>
        <div className="additional">
        <h3>Min: {(city.temp_min-273.0).toFixed(2)}</h3><h3>Max: {(city.temp_max-273.0).toFixed(2)} </h3>
        <h3>Humidity: {city.humidity}</h3></div>
           </div> )
        }
        </div>
    )
}
export default Show;