import React, { Component } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Data from "../Data.json";

export default class Contents extends Component {
  constructor() {
    super();
    this.state = {
      val: Data,
      filterValue: [],
      handleFilter: "",
      btn: true,
      unique: [...new Set(Data.map((obj) => obj.type))].map((type) => {
        return Data.find((obj) => obj.type === type);
      }),
    };
  }

  
  // const [val, setVal] = useState(Data);
  // const [filtervalue, setFilterValue] = useState([]);
  // const [handlefilter, setHandleFilter] = useState("");
  // const [btn, setBtn] = useState(true);
  handler = (event) => {
    const selectedtype = event.target.value;

    const newarr = Data.filter((ele) => {
      return ele.type === selectedtype;
    });
    this.setState({ val: newarr });
    this.setState({ filterValue: newarr });
    this.setState({ btn: false });
  };

  handleSearch = () => {
    if (this.state.handleFilter === "") {
      this.setState.val(this.state.filterValue);
    } else {
      const filterResult = this.state.filterValue.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .includes(this.state.handleFilter.toLowerCase()) ||
          item.dish
            .toLowerCase()
            .includes(this.state.handleFilter.toLowerCase())
        );
      });

      this.setState({ val: filterResult });
    }
  };

  handleClick = (result) => {
    console.log(result.name);
    this.state = {
        name: "",
        type: "",
        dish: "",
        price: 0
     
    };
    this.setState({ name: localStorage.getItem("name") });
    this.setState({ type: localStorage.getItem("type") });
    this.setState({ dish: localStorage.getItem("dish") });
    this.setState({ price: localStorage.getItem("price") });

    localStorage.setItem("name", result.name);
    localStorage.setItem("type", result.type);
    localStorage.setItem("dish", result.dish);
    localStorage.setItem("price", result.price);




    window.location = `/product/${result.id}`;
   
  };

  render() {
    return (
      <>
        <div className="home-div">
          <h1>Food Bhaloo</h1>
          <div className="productsFilter">
            <label>Type:</label>
            <select className="optionsStyle" onChange={this.handler}>
              <option disabled>Select Type</option>

              {this.state.unique.map((response, index) => {
                return <option key={index}>{response.type}</option>;
              })}
            </select>
            <label>Dish: </label>
            <div className="optionsStyle">
              <input
                type="text"
                disabled={this.btn}
                placeholder="Search"
                onChange={(e) =>
                  this.setState({ handleFilter: e.target.value })
                }
              />
            </div>
            <button onClick={this.handleSearch} disabled={this.state.btn}>
              Search{" "}
              <svg
                className="searchListIcon"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="checkout-div"></div>
        <div className="home-div">
          <h1>Products</h1>
          <table className="productsList">
            <tr>
              <th>Image</th>

              <th>Name</th>

              <th>Price</th>
            </tr>
            {this.state.val.map((result, index) => {
              return (
                <>
                  <tr key={index} className="producteach">
                    <td>
                      <img
                        src={result.image}
                        alt=""
                        className="productsListImg"
                      />
                    </td>
                    <td className="productsListName">
                      <b>Name</b>
                      <br />
                      {result.name}
                    </td>
                    <td className="productsListType">
                      <b>Type</b>
                      <br />
                      {result.type}
                    </td>
                    <td className="productsListType">
                      <b>Dish</b>
                      <br />
                      {result.dish}
                    </td>
                    <td className="productsListPrice">
                      <b>Price</b>
                      <br />
                      {result.price}/Rs
                    </td>
                    <td>
                      <button
                        className="productsListOrder"
                        onClick={() => this.handleClick(result)}
                      >
                        ADD TO CART
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
