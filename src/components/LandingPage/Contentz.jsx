import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Data.json";

export default function Contents() {
  const [val, setVal] = useState(Data);
  const [filtervalue, setFilterValue] = useState([]);
  const [handlefilter, setHandleFilter] = useState("");
  const [btn, setBtn] = useState(true);

  // Filtering JSON File Array Of Objects & Getting Unique Values Of Types
  const unique = [...new Set(Data.map((obj) => obj.type))].map((type) => {
    return Data.find((obj) => obj.type === type);
  });

  //Filtering JSON File Array Of Objects & Displaying Values of Selected Types
  function handler(event) {
    const selectedtype = event.target.value;

    const newarr = Data.filter((ele) => {
      return ele.type === selectedtype;
    });
    setVal(newarr);
    setFilterValue(newarr);
    setBtn(false);
  }

  // Search Filter According To Name
  function handlesearch() {
    if (handlefilter === "") {
      setVal(filtervalue);
    } else {
      const filterresult = filtervalue.filter((item) => {
        return (
          item.name.toLowerCase().includes(handlefilter.toLowerCase()) ||
          item.dish.toLowerCase().includes(handlefilter.toLowerCase())
        );
      });

      setVal(filterresult);
    }
  }

  // Getting ADD To Cart Value
  // const id = cartvalue;
  const navigate = useNavigate();
  function handleClick(result) {
    // setCartValue([...cartvalue, result]);
    // console.log(cartvalue);
    navigate("/product", { state: { id: result } });
  }
  //   useEffect(() => {
  //     console.log('updated value', cartvalue);
  //   }, [cartvalue])

  // Check Out Button Redirected To Cart

  return (
    <>
      <div className="home-div">
        <h1>Food Bhaloo</h1>
        <div className="productsFilter">
          <label>Type:</label>
          <select className="optionsStyle" onChange={handler}>
            <option disabled>Select Type</option>

            {unique.map((response, index) => {
              return <option key={index}>{response.type}</option>;
            })}
          </select>
          <label>Dish: </label>
          <div className="optionsStyle">
            <input
              type="text"
              disabled={btn}
              placeholder="Search"
              onChange={(e) => setHandleFilter(e.target.value)}
            />
          </div>
          <button onClick={handlesearch} disabled={btn}>
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
            
          {val.map((result, index) => {
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
                  <td className="productsListName"><b>Name</b><br />{result.name}</td>
                  <td className="productsListType"><b>Type</b><br />{result.type}</td>
                  <td className="productsListType"><b>Dish</b><br />{result.dish}</td>
                  <td className="productsListPrice"><b>Price</b><br/>{result.price}/Rs</td>
                  <td>
                    <button
                      className="productsListOrder"
                      onClick={() => handleClick(result)}
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
