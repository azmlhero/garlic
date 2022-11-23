import React from "react";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";
import { TextField, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Region from "./Region";

const columns = [
  {
    id: 0,
    name: "Name",
  },
  {
    id: 1,
    name: "Qty",
  },
  {
    id: 2,
    name: "Total",
  },
];

export default function Order() {
  const navigate = useNavigate();
  const [id, setId] = useState({});
  const [order, setOrder] = useState([]);
  const [email, setEmail] = useState({});
  const [name, setName] = useState({});
  const [lastname, setLastName] = useState({});
  const [address, setAddress] = useState({});

  // const Order = async (id) => {
  //   const newOrder = {
  //     name: name,
  //     lastname: lastname,
  //     email: email,
  //     address: address,
  //   };
  //   if (name && lastname && email && address)
  //   {const eachOrder = (order, id);
  //     await (eachOrder,newOrder).then(() => { navigate("/product")});}
  //   else alert("Please fill all the fields");
  // };
  // console.log(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`submitted`);
    navigate("/bill");
  };
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

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
          </thead>
          <tbody>
            {/* {.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}/Rs</td>
                  </tr>
                </>
              );
            })} */}
          </tbody>
        </table>
        <form onSubmit={handleSubmit} className="formStyle">
          <h2>Contact Information</h2>
          <div>
            <div className="divInputFields">
              <label>First Name:</label>
              <input
                className="inputFields"
                type="text"
                placeholder="Your Name*"
                required="Name is required"
                // value={inputs.username || ""}
                // onChange={handleChange}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <label> Last Name:</label>
              <input
                className="inputFields"
                type="text"
                placeholder="last Name*"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <br />
            <label>Enter your Email </label>
            <input
              className="email"
              type="email"
              placeholder="Email *"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setAddress(e.target.value);
              }}
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
