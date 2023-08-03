import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fce5427013529a19a9d1e706348714a6`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      // console.log(resJson)
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          
        </div>
        {!city ? (
          <p className="errorMsg">Data not found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel </h1>
              <h3 className="tempmin_max">
                {" "}
                min :{city.temp_min}
                °C| max : {city.temp_max} °C
              </h3>
            </div>
            <div className="wave -one"> </div>
            <div className="wave -two"> </div>
            <div className="wave -three"> </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;
