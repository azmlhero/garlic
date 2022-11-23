import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function CountryDiv(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
      console.log(res);
      setCountry(res.data.data);
    });
  }, []);

  return (
    <div className="" style={props.style}>
      <label>Countries</label>

      <select
      
        id="cars"
        value={props.value}
        onChange={(event) => {
          props.callbackMethod(event.target.value);
        }}
      >
        <option>Select Country</option>

        {country.map((con, id) => {
          return (
            <option clasName="regionOption1" key={id} value={con.id}>
              {con.country}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function StateDiv(props) {
  const [sta, setStateValue] = useState([]);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", {
        country: props.value,
      })
      .then((res) => {
        setStateValue(res.data.data.states);
      });
  }, [props.value]);

  return (
    <div className="">
      <label for="cars">State</label>

      <select 
        id="cars"
        value={props.values}
        onChange={(event) => {
          props.callbackMethods(event.target.value);
        }}
      >
        <option value="volvo">Select State</option>
        {sta.map((sta, id) => {
          return (
            <option clasName="regionOption1" key={id} value={sta.name}>
              {sta.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
function CityDiv(props) {
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        country: props.value,
        state: props.values,
      })
      .then((res) => {
        console.log(res.data.data);
        setCity(res.data.data);
      });
  }, [props.value, props.values]);

  return (
    <div className="">
      <label for="cars">Cities</label>

      <select  name="cars" id="cars">
        <option value="volvo">Select City</option>

        {city.map((cities, id) => {
          return (
            <option clasName="regionOption1" key={id} value={cities.index}>
              {cities}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default function Region() {
  const [getcountryvalue, setCountryvalue] = useState("");
  const [sta, setStateValue] = useState("");

  return (
    <div className="regionOption">
      <CountryDiv className="regionOptions" callbackMethod={(value) => setCountryvalue(value)} />
      <StateDiv className="regionOptions"
        value={getcountryvalue}
        callbackMethods={(value) => setStateValue(value)}
      />
      <CityDiv className="regionOptions" value={getcountryvalue} values={sta} />
    </div>
  );
}
