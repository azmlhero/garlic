import React from "react";
import { useState } from "react";
import Data from "./Data.json";

const all = Data.map((p) => p.type); // [17, 17, 35]
const set = new Set(all); // {17, 35} a set removes duplications, but it's still a set
const type = Array.from(set);
console.log(type);

export default function FoodType() {
  const [searchType, setSearchType] = useState("");
  return (
    <div>
      <label> TYPE</label>
      <select
        className="optionsStyle"
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
      >
        <option value="Punjab">Select Type</option>
        {type.map((res, id) => {
          return (
            <option key={id} value={res}>
              {res}
            </option>
          );
        })}
      </select>

      <div className="productsList">
        {Data.filter((value) => {
          if (searchType === "") {
            return value;
          } else if (
            value.type.toLowerCase().includes(searchType.toLowerCase())
          ) {
            return value;
          }
        }).map((product) => (
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
              <div className="">
                <a href="/product" className="">
                <button className="productsListOrder">Order Now</button>    
                </a>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
