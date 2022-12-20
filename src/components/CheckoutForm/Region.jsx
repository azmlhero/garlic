import React, { useState, Component } from "react";
import { useEffect } from "react";
import axios from "axios";

class CountryDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      country: [],
      countryValue: "",
    };
  }
  componentDidMount() {
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
      console.log(res.data.data, "countries");
      
        this.setState({ country: res.data.data });
      
    });
  }
  handleCountry = (event) => {
    console.log(event.target.value)
    this.setState({ countryValue: event.target.value });
  };
  componentDidUpdate(prevState) {
    if (prevState.countryValue !== this.state.countryValue) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: this.state.countryValue,
        })
        .then((res) => {
          console.log(res.data.data.states, "state");
          // {this.setState({country:res.data.data})}
          {
            this.setState({ sta: res.data.data.states });
          }
        });}}

  render() {
    return (
      <div className="" style={this.props.style}>
        <label>Countries</label>

        <select
          id="cars"
          value={this.props.value}
          onChange={this.handleCountry}

          // onChange={(event)=>{
          //   return(
          //     console.log(event.target.value)
          //   )
          // }}
        >
          <option>Select Country</option>

          {this.state.country.map((con, id) => {
            return (
              <option clasName="regionOption1" key={id} value={con.id}>
                {con.country}
              </option>
            );
          })}
        </select>
        {/* <select>
        {this.state.country.map((con, id) => {
            return (
              <option clasName="regionOption1" key={id} value={con.id}>
                {con.country}
              </option>
            );
          })}
           </select> */}
      </div>
    );
  }
 
}

class StateDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sta: [],
    };
    console.log(this.props, "rfrffff");
  }
  // componentDidMount() {
  //   axios
  //     .post("https://countriesnow.space/api/v0.1/countries/states", {
  //       country: this.props.value,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       {
  //         this.setState({ sta: res.data.data.states });
  //       }
  //     });
  // }

  componentDidUpdate(prevState) {
    if (prevState.countryValue !== this.state.countryValue) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: this.state.countryValue,
        })
        .then((res) => {
          console.log(res.data.data.states, "state");
          // {this.setState({country:res.data.data})}
          {
            this.setState({ sta: res.data.data.states });
          }
        });
    }
  }

  
  render() {
    return (
      <div className="">
        <label for="cars">State</label>

        <select
          id="cars"
          value={this.props.values}
          onChange={(event) => {
            this.props.callbackMethods(event.target.value);
          }}
        >
          <option value="volvo">Select State</option>
          {this.state.sta.map((sta, id) => {
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
}

class CityDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      city: [],
    };
  }
  // componentDidMount() {
  //   axios
  //     .post("https://countriesnow.space/api/v0.1/countries", {
  //       country: this.props.value,
  //       state: this.props.values,
  //     })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       {
  //         this.setState({ city: res.data.data });
  //       }
  //     });
  // }

  render() {
    return (
      <div className="">
        <label for="cars">Cities</label>

        <select name="cars" id="cars">
          <option value="volvo">Select City</option>

          {this.state.city.map((cities, id) => {
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
}
export default class Region extends Component {
  constructor() {
    super();
    this.state = {
      getcountryvalue: "",
      sta: "",
    };
  }
  render() {
    return (
      <div className="regionOption">
        <CountryDiv
          className="regionOptions"
          callbackMethod={(value) => {
            this.setState({ getcountryvalue: value });
          }}
        />
        <StateDiv
          className="regionOptions"
          value={this.state.getcountryvalue}
          callbackMethods={(value) => {
            this.setState({ sta: value });
          }}
        />
        <CityDiv
          className="regionOptions"
          value={this.state.getcountryvalue}
          values={this.state.sta}
        />
      </div>
    );
  }
}
