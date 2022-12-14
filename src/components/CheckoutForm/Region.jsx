import React, { useState,Component  } from "react";
import { useEffect } from "react";
import axios from "axios";

class CountryDiv extends React.Component {
  constructor() {
    super();
    this.state={
      country:[]
    }
    
  }
    componentDidMount(){
      axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((res)=>{
        console.log(res);
        {this.setState({country:res.data.data})}
  
      })
      
    }
  
  
  render() {
    return (
      <div className="" style={this.props.style}>
      <label>Countries</label>

      <select
      
        id="cars"
        value={this.props.value}
        onChange={(event) => {
          this.props.callbackMethod(event.target.value);
        }}
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
    </div>
    )
  }
}
// function CountryDiv(props) {
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
//       console.log(res);
//       setCountry(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="" style={props.style}>
//       <label>Countries</label>

//       <select
      
//         id="cars"
//         value={props.value}
//         onChange={(event) => {
//           props.callbackMethod(event.target.value);
//         }}
//       >
//         <option>Select Country</option>

//         {country.map((con, id) => {
//           return (
//             <option clasName="regionOption1" key={id} value={con.id}>
//               {con.country}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

// function StateDiv(props) {
//   const [sta, setStateValue] = useState([]);

//   useEffect(() => {
//     axios
//       .post("https://countriesnow.space/api/v0.1/countries/states", {
//         country: props.value,
//       })
//       .then((res) => {
//         setStateValue(res.data.data.states);
//       });
//   }, [props.value]);

//   return (
//     <div className="">
//       <label for="cars">State</label>

//       <select 
//         id="cars"
//         value={props.values}
//         onChange={(event) => {
//           props.callbackMethods(event.target.value);
//         }}
//       >
//         <option value="volvo">Select State</option>
//         {sta.map((sta, id) => {
//           return (
//             <option clasName="regionOption1" key={id} value={sta.name}>
//               {sta.name}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }
  class StateDiv extends React.Component {
    constructor(props) {
    super(props);

      this.state={
        sta:[]
      }
      console.log(this.props.value,"rfrffff")


    }
      componentDidMount(){
        axios.post("https://countriesnow.space/api/v0.1/countries",{
          'country': this.props.value
        })
  
        .then((res) => {
           console.log(res.data.data.states,"resssss");
          // {this.setState({country:res.data.data})}
          {this.setState({sta:res.data.data.states})}
  
      })}
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
      
          )}
            }
         

            // function CityDiv(props) {
            //   const [city, setCity] = useState([]);
            
            //   useEffect(() => {
            //     axios
            //       .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
            //         country: props.value,
            //         state: props.values,
            //       })
            //       .then((res) => {
            //         console.log(res.data.data);
            //         setCity(res.data.data);
            //       });
            //   }, [props.value, props.values]);
            
            //   return (
            //     <div className="">
            //       <label for="cars">Cities</label>
            
            //       <select  name="cars" id="cars">
            //         <option value="volvo">Select City</option>
            
            //         {city.map((cities, id) => {
            //           return (
            //             <option clasName="regionOption1" key={id} value={cities.index}>
            //               {cities}
            //             </option>
            //           );
            //         })}
            //       </select>
            //     </div>
            //   );
//             // }
class CityDiv extends React.Component {
  constructor() {
    super();

    this.state={
      city:[]
    }}
    componentDidMount(){
      axios.post("https://countriesnow.space/api/v0.1/countries",{
        'country': this.props.value,
        'state': this.props.values,
      })
      .then((res)=>{
        console.log(res.data.data);
        {this.setState({city:res.data.data})}
  
      })}
 
    render(){
      return(
        <div className="">
        <label for="cars">Cities</label>
  
        <select  name="cars" id="cars">
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
      )
    }}
    export default class Region extends Component {
  constructor() {
    super();
    this.state = {
      getcountryvalue:"",
      sta:""
    };
  }
render(){
   return (
    <div className="regionOption">
      <CountryDiv className="regionOptions" callbackMethod={(value) => {this.setState({getcountryvalue:value})}} />
       <StateDiv className="regionOptions"
        value={this.state.getcountryvalue}
        callbackMethods={(value) => {this.setState({sta:value})}}
      />
     <CityDiv className="regionOptions" value={this.state.getcountryvalue} values={this.state.sta} />
    </div>
  );
}
 
}
