import React from "react";
import Data from "./Data.json";
import { useState } from "react";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <label> Dish</label>
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
        <button>
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
        <h1>Products</h1>
      </div>
      <div className="productsList">
        {Data.filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.dish.toLowerCase().includes(searchTerm.toLowerCase())
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
              <button className="productsListOrder">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
