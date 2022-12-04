import React, { useState, useEffect } from "react";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from "./Data.json";
// import img from "..//images/foodBhalo.jpg"

export default function Product() {
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState(Data);
  const [total, setTotal] = useState(0);
  const params = useParams();
  console.log("Params", params, "Params.id", params.id);

  const prod = product.filter((item) => {
    return item.id == params.id;
  });
  console.log(prod);

  const navigate = useNavigate();
  function decClick() {
    if (qty > 0) {
      setQty(qty - 1);
      {
        prod.map((item) => {
          return setTotal(qty * item.price);
        });
      }
    } else {
      return 0;
    }
  }

  function incClick() {
    if (qty < 5) {
      setQty(qty + 1);
      {
        prod.map((item) => {
          return setTotal(qty * item.price);
        });
      }
    }
  }

  useEffect(() => {
    {
      prod.map((item) => {
        return setTotal(qty * item.price);
      });
    }
  }, [qty]);

  function buyNow(res) {
    // setTotal(localStorage.getItem("total"));
    //   // setP_Name(localStorage.getItem("name"));
    //   // setQuantity(localStorage.getItem("quantity"));

    //   localStorage.setItem("total", qty * res.price);
    //   console.log(product.price);
    //   localStorage.setItem("name", res.name);
    //   localStorage.setItem("quantity", qty);

    navigate("/order", { state: { id: res, id2: total, id3: qty } });
  }

  return (
    <div>
      <Header />
      {prod.map((res) => {
        return (
          <div>
            <div style={{ margin: "100px 0px 300px 0px" }}>
              {/* {location.state.id.map(() => {
          return ( */}
              <div>
                <div className="productPageeach">
                
                  <img style={{marginLeft:"350px", width:"250px", height:"250px", borderRadius:"25px", textShadow:"100px"}} src={res.image} alt="image" className="productsListImg" />
                  
                  <div className="productPageRight">
                    <h2 className="productPageListName"> Name: {res.name} </h2>

                    <b
                      style={{ margin: "0px 200px 0px 0px " }}
                      className="productPageListType"
                    >
                      {" "}
                      Type:- {res.type}
                    </b>

                    <p
                      style={{ margin: "20px 200px 0px 0px " }}
                      className="productPageListPrice"
                    >
                      {" "}
                      Price: {res.price}
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
                      <div>
                        <h3>Total</h3> Rs. {total}
                      </div>

                      <button
                        disabled={qty === 0}
                        className="productPageListOrder"
                        onClick={() => buyNow(res)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                  {/* {prod.price} */}
                </div>
                .
              </div>
              {/* );
        })} */}
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
