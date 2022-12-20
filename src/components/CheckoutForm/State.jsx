import React, { Component } from "react";
import axios from "axios";
export default class State extends Component {
  constructor() {
    const id = window.location.pathname.split(/[/,order]/);

    super();

    this.state = {
      country: [],

      countryValue: "",

      stat: [],
      stateValue:"",
      city:[],
      cityValue:""
    };
  }

  componentDidMount() {
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
    //   console.log("Country", res.data.data);
      this.setState({ country: res.data.data });
    });
  }
  componentDidUpdate(prevState) {
    if (prevState.countryValue !== this.state.countryValue ) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: this.state.countryValue,
        })
        .then((res) => {
        //   console.log("State", res.data.data.states);
          this.setState({ stat: res.data.data.states });
        });
    }
    if (prevState.stateValue !== this.state.stateValue|| prevState.countryValue !== this.state.countryValue) {
        axios
          .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
            country: this.state.countryValue,
            state: this.state.stateValue
  
          })
          .then((res) => {
            // console.log("State", res.data.data);
            this.setState({ city: res.data.data });
          });
      }
  
  }
 
  componentWillUnmount()
      {}




  handleCountry = (event) => {
    console.log(event.target.value);
    this.setState({ countryValue: event.target.value });
    // console.log("COUNTRIES", this.state.country);
  };
  handleState = (event) => {
    console.log(event.target.value);
    this.setState({ stateValue: event.target.value });
    console.log("statES", this.state.stat);
  };

  render() {
    return(<div>
        <label>Select Country</label>

<select onChange={this.handleCountry} name='country'>

    <option>Select Country</option>

    {

        this.state.country.map((con, id) => {

            return (

                <option

                    key={id}>{con.country}

                </option>

            )

        })

    }

</select>

<label>Select State</label>

<select onChange={this.handleState}name='state'>


    <option>Select State</option>

    {

        this.state.stat.map((st, id) => {

            return (

                <option

                    key={id} >{st.name}

                </option>

            )

        })

    }

</select>

<label>Select City</label>

<select name='City'>

    <option>Select City</option>

    {

        this.state.city.map((town) => {

            return (

                <option>{town}

                </option>

            )

        })

    }

</select>

    </div>)
 
     
}}
