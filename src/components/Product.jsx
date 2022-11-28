import React, { useState } from "react";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
 import Data from "./Data.json";
export default function Product() {
  const [qty, setQty] = useState(0);
  const location = useLocation();
  const [result, setResult] = useState(location.state.id);
  // const prod=location.state.id;
  console.log(location.state.id);

  const navigate = useNavigate();
  // location   usestate use karna hay then map karan hay console.log(location.state.id);
  function decClick() {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      return 0;
    }
  }

  function incClick() {
    if (qty < 5) {
      setQty(qty + 1);
    }
  }

  const buyNow = () =>{
    // setTotal(localStorage.getItem("total"));
    // setP_Name(localStorage.getItem("name"));
    // setQuantity(localStorage.getItem("quantity"));


    localStorage.setItem("total", (qty* result.price));
    localStorage.setItem("name", result.name);
    localStorage.setItem("quantity", qty);

    navigate("/order")
  }

  return (
    <div>
      <Header />
      <div style={{ margin: "100px 0px 300px 0px" }}>
        {/* {location.state.id.map(() => {
          return ( */}
            <div className="productPageeach">
              <img
                className="productPageListImg"
                src="images/foodBhalo.jpg"
                // src="./foodBhalo.png"
                alt="Ammar pix"
              />
              <div className="productPageRight">
                <h2 className="productPageListName"> Name: {result.name} </h2>

                <b
                  style={{ margin: "0px 200px 0px 0px " }}
                  className="productPageListType"
                >
                  {" "}
                  Type:- {result.type}
                </b>

                <p
                  style={{ margin: "20px 200px 0px 0px " }}
                  className="productPageListPrice"
                >
                  {" "}
                  Price: {result.price}
                </p>

                <div className="productPageButtons">
                  <div className="productPageListQty">
                    <button
                      disabled={qty === 0}
                      onClick={decClick}
                      className="productPageQtyInc"
                    >
                      -
                    </button>
                    <b className="productPageQty">{qty}</b>
                    <button
                      disabled={qty === 5}
                      onClick={incClick}
                      className="productPageQtyDec"
                    >
                      +
                    </button>
                  </div>
                  <div><h3>Total</h3> Rs. {qty * result.price}</div>

                 
                    <button disabled={qty === 0}className="productPageListOrder" onClick={buyNow}>Buy Now</button>
                  
                </div>
              </div>
              {/* {prod.price} */}
            </div>
          {/* );
        })} */}
      </div>

      <Footer />
    </div>
  );
}
