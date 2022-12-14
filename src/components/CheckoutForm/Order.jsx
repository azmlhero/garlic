import React, { useEffect, Component } from "react";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";
import { TextField, Button } from "@mui/material";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Region from "./Region";
import Data from "../Data.json";

export default class Order extends Component {
  constructor() {
    const id = window.location.pathname.split(/[order,/]/);
    // let lastElement = arry[arry.length - 1];
    console.log("TotallastElement", id[id.length - 1]);
    console.log("Qty", id[id.length - 2]);
    console.log("ProductId", id[id.length - 3]);

    super();
    this.state = {
      user: {
        name: "",
        lastname: "",
        email: "",
        address: "",
      },
      id: id[id.length - 3],
      total: id[id.length - 1],
      qty: id[id.length - 2],

      prod: [
        Data.find((item) => {
          return item.id == id[id.length - 3];
        }),
      ],
    };
    
    // console.log(this.props.location.state.id);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`submitted`);
    window.location=`/bill`
  };

  // let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };
//   handleChange: function(e) {
//     this.setState({[e.target.name]: e.target.value});
// }

  handleInputs = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({user:{ ...this.state.user, [name]: value }});
  };
  // const {
  //   register,
  //   // handleSubmit,
  //   formState: { errors },
  // } = useForm();

  render() {
    console.log(this.props.parentToChild);
    // console.log(this.props.location.state.detail)
    return (
      <div>
        <Header />

        <div className="">
          <h1>Invoice</h1>

          <table className="productOrderTable">
            <thead>
              <tr className="productOrderTableHeading">
                <th className="productOrderTableHeading1">Name</th>

                <th className="productOrderTableHeading2">Quantity</th>
                <th className="productOrderTableHeading3">Total</th>
              </tr>
              <tr className="productOrderTableHeading">
                {this.state.prod.map((res) => {
                  console.log(res);
                  return (
                    <th className="productOrderTableHeading1">{res.name}</th>
                  );
                })}

                <th className="productOrderTableHeading2">{this.state.qty}</th>
                <th className="productOrderTableHeading3">
                  {this.state.total}/Rs
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <form onSubmit={this.handleSubmit} className="formStyle">
            <h2>Contact Information</h2>
            <div>
              <div className="divInputFields">
                <label>First Name:</label>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Your Name*"
                  required="Name is required"
                  name="name"
                  value={this.state.user.name}
                  onChange={this.handleInputs}
                />
                <br />
                <label> Last Name:</label>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="last Name*"
                  name="lastname"
                  value={this.state.user.lastname}
                  onChange={this.handleInputs}
                />
              </div>
              <br />
              <label>Enter your Email </label>
              <input
                className="email"
                type="email"
                placeholder="Email *"
                required
                name="email"
                value={this.state.user.email}
                onChange={this.handleInputs}
              />

              <Region />
              <TextField
                sx={{ width: "75%", margin: "0px 20px 20px 20px" }}
                label="Address"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                type="text"
                // value={email}
                placeholder="HOUSE#1 STREET 2 NEAR G1 MARKET"
                name="address"
                value={this.state.user.address}
                onChange={this.handleInputs}
              />
              {/* navigate("/bill") */}
              {/* <NavLink to="/bill"> */}
              <Button
                type="submit"
                sx={{ width: "75%" }}
                variant="outlined"
                style={{ height: "50px" }}
                onClick={() => {}}
              >
                Confirm Order
              </Button>
              {/* </NavLink> */}
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
