import React, { useState, Component } from "react";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from "./Data.json";
// import img from "..//images/foodBhalo.jpg"

export default class Product extends Component {
  constructor(props){
    super(props);
  

    this.state={
      qty:0,
      // product:Data,
      total:0,
      name:"",
      prod:Data.find((item)=>{
       return  item.id== window.location.id
      })

      // prod: product.filter((item) => {
      //   return item.id == params.id;
      // })
      // product: Data.find((item) => {
      //   return item.id == this.location.state.dish.id;
      // })

    }
    console.log(this.props.item.id)  
  }
  getData = () => {
    this.setState({ name: localStorage.getItem("name") });
    this.setState({ total: localStorage.getItem("total") });   
    this.setState({ qty: localStorage.getItem("quantity") });
   
    console.log(localStorage.getItem("total"));
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("quantity"));
  };

  componentDidMount(){
    this.getData();
  }
  
  // decClick=()=> {
  //   if (this.qty > 0) {
  //     this.setState({qty:this.state.qty--});
      
  //     {
  //       prod.map((item) => {
  //         return this.setState({total:(this.state.qty * item.price)});
  //       });
  //     }
  //   } else {
  //     return 0;
  //   }
  // }

  //  incClick=()=> {
  //   if (this.qty < 5) {
  //     this.setState({qty:this.state.qty++});
  //     {
  //       prod.map((item) => {
  //         return this.setState({total:(this.state.qty * item.price)});
        
  //       });
  //     }
  //   }
  // }
  //   useEffect(() => {
//     getData();
//   }, [total, p_name, quantity]);
  render(){
  return(
    <div>
       <h1>hello</h1>   
        
       <div>
      <Header />
      {this.state.prod.map((res) => {
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
                          disabled={this.state.qty === 0}
                          onClick={this.decClick}
                          className="productPageQtyInc"
                        >
                          -
                        </button>
                        <b className="productPageQty">{this.state.qty}</b>
                        <button
                          disabled={this.qty === 5}
                          onClick={this.incClick}
                          className="productPageQtyDec"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <h3>Total</h3> Rs. {this.state.total}
                      </div>

                      <button
                        disabled={this.qty === 0}
                        className="productPageListOrder"
                        onClick={() =>this.buyNow(res)}
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
   
    </div>
 
  )
}
}
