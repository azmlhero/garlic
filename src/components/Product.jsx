import React, { useState } from "react";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import { useLocation } from "react-router-dom";
// import Data from "./Data.json";
export default function Product() {
  const [qty, setQty] = useState(0);
  const location = useLocation();
  const [prod, setProd] = useState(location.state.id);
  // const prod=location.state.id;
  console.log(location.state.id);

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

  // function addToCart() {
  //   const newProduct = {
  //     quantity: qty,
  //     product: prod,
  //     p_id: prod.id,
  //   };
  //   setProd(newProduct);
    // Rs. {qty * prod.price}
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
                <h2 className="productPageListName"> Name: {prod.name} </h2>

                <b
                  style={{ margin: "0px 200px 0px 0px " }}
                  className="productPageListType"
                >
                  {" "}
                  Type:- {prod.type}
                </b>

                <p
                  style={{ margin: "20px 200px 0px 0px " }}
                  className="productPageListPrice"
                >
                  {" "}
                  Price: {prod.price}
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
                  <div><h3>Total</h3> Rs. {qty * prod.price}</div>

                  <a href="/order">
                    <button disabled={qty === 0}className="productPageListOrder">Buy Now</button>
                  </a>
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
