import React, { useEffect } from "react";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";
import { TextField, Button } from "@mui/material";
import { useNavigate, NavLink, useLocation} from "react-router-dom";
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
  const location = useLocation();
console.log(location.state.id3);
  const [product,setProduct]=useState(location.state.id);
  const [id, setId] = useState({});
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
  });

  // const [order, setOrder] = useState([]);

  // const [total, setTotal] = useState();
  // const [p_name, setP_Name] = useState();
  // const [quantity, setQuantity] = useState();

  // const getData = () => {
  //   setTotal(localStorage.getItem("total"));
  //   setP_Name(localStorage.getItem("name"));
  //   setQuantity(localStorage.getItem("quantity"));

  //   console.log(localStorage.getItem("total"));
  //   console.log(localStorage.getItem("name"));
  //   console.log(localStorage.getItem("quantity"));
  // };
  // useEffect(() => {
  //   getData();
  // }, [total, p_name, quantity]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`submitted`);
    navigate("/bill");
  };
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
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
            <tr className="productOrderTableHeading">
              <th className="productOrderTableHeading1">{location.state.id.name}</th>

              <th className="productOrderTableHeading2">{location.state.id3}</th>
              <th className="productOrderTableHeading3">{location.state.id2}/Rs</th>
            </tr>
          </thead>
          <tbody></tbody>
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
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
              <br />
              <label> Last Name:</label>
              <input
                className="inputFields"
                type="text"
                placeholder="last Name*"
                name="lastname"
                value={user.lastname}
                onChange={handleInputs}
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
              value={user.email}
              onChange={handleInputs}
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
              value={user.address}
              onChange={handleInputs}
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
