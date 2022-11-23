import React, { useState, useEffect} from "react";
import { NavLink,useNavigate} from "react-router-dom";
import Data from "../Data.json";
const all = Data.map((p) => p.type); // [17, 17, 35]
const set = new Set(all); // {17, 35} a set removes duplications, but it's still a set
const type = Array.from(set);
console.log(type);
export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [cart, setCart] = useState([]);

  const reset_ = () => {
    if (searchTerm != "") {
      const test = Data.filter((value) => {
        console.log("1");
        console.log(value);

        if (searchTerm === "") {
          return value;
        } else if (
          (searchType === value.type &&
            value.dish.toLowerCase().includes(searchTerm.toLowerCase())) ||
          value.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          console.log(value);
          return value;
        }
      }).map((product) => product);
      setList(test);
      console.log(list);
      setFlag(true);
    } else {
      setFlag(false);
      console.log(Data);
    }
  };

  const addToCart = (product) => {
    console.log(product);
    let _ = cart;
    setCart([...cart, product]);
  };

  // useEffect(() => {
  //   handleOrder();
  // }, []);
const navigate=useNavigate();
  function handleOrder(product) {

    // console.log(product);
    navigate("/product",{state:{id:product}});
    // const students = await fetch("/students");
    // const data = await students.json();
    // console.log("here", data);
    // setStudentData(data);
  }
  return (
    <div>
      <div className="productsFilter">
        <div>
          <label> TYPE</label>
          <select
            className="optionsStyle"
            onChange={(e) => {
              setSearchType(e.target.value);
            }}
          >
            <option value="Punjab">Select Type</option>
            {type.map((searchType, id) => {
              return (
                <option key={id} value={searchType}>
                  {searchType}
                </option>
              );
            })}
          </select>
        </div>

        <label style={{ margin: "5px 0px 0px 0px" }}> Dish</label>
        <div className="optionsStyle">
          <input
            className=""
            type="search"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <button onClick={reset_}>
          Search
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
      </div>{" "}
      <button
        onClick={() => {
          console.log(cart);
        }}
      >
        CHECKOUT
      </button>
      <h1>Products</h1>
      <div className="productsList">
        {flag
          ? list.map((product) => (
              <div key={product.id}>
                <div className="producteach">
                  <img
                    className="productsListImg"
                    src={product.image}
                    alt={product.name}
                  />
                  <h2 className="productsListName"> {product.name}</h2>
                  <b className="productsListType"> Type:- {product.type}</b>

                  <p className="productsListPrice"> Price: {product.price}</p>
                  <NavLink to="/product" className="" >
                  <button
                    className="productsListOrder"
                    onClick={() => {addToCart(product)}}
                  >
                    Order Now
                  </button>
                  </NavLink>
                </div>
              </div>
            ))
          : Data.map((product) => (
              <div key={product.id}>
                <div className="producteach">
                  <img
                    className="productsListImg"
                    src={product.image}
                    alt={product.name}
                  />
                  <h2 className="productsListName"> {product.name}</h2>
                  <b className="productsListType"> Type:- {product.type}</b>

                  <p className="productsListPrice"> Price: {product.price}</p>
                  {/* <NavLink to="/product" className="" > */}
                  <button
                    className="productsListOrder"
                    onClick={()=>{handleOrder(product)}}
                    // onClick={() => {addToCart(product)}}
                  >
                    Order Now
                  </button>
                  {/* </NavLink> */}

                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

