import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Data from "../Data.json"

export default function Contents() {
    const [val, setVal] = useState(Data);
    const [filtervalue, setFilterValue] = useState([]);
    const [handlefilter, setHandleFilter] = useState('');
    var i = 1;

    // Filtering JSON File Array Of Objects & Getting Unique Values Of Types
    const unique = [...new Set(Data.map( obj => obj.type ))]
                   .map(type => { return ( Data.find ( obj => obj.type === type)) })

    //Filtering JSON File Array Of Objects & Displaying Values of Selected Types
    function handler(event) {
        const selectedtype = event.target.value;
        const newarr = Data.filter(ele => {
            return (
                ele.type === selectedtype
            )
        });
        setVal(newarr);
        setFilterValue(newarr);
    }
    
    // Search Filter According To Name
    function handlesearch() {
        if (handlefilter === '') {
            setVal(filtervalue)
        } else {
            const filterresult = filtervalue.filter((item) => item.name.toLowerCase()
                .includes(handlefilter.toLowerCase())) 
            setVal(filterresult)
        }
    }

    // Getting ADD To Cart Value 
    // const id = cartvalue;
    const navigate = useNavigate()
    function handleClick(result) {
        // setCartValue([...cartvalue, result]);
        // console.log(cartvalue);
        navigate("/cart", {state: {id: [result]}});
      }
    //   useEffect(() => {
    //     console.log('updated value', cartvalue);
    //   }, [cartvalue])

    // Check Out Button Redirected To Cart
    

    return (
        <><div className='home-div'>
            <h1>Food Bhaloo</h1>
            <label>Type:</label>
            <select className='dropdown' onChange={handler} >
                <option selected disabled>--Select Type--</option>

                {unique.map((response, index) => {
                    return (
                        <option key={index}>{response.type}</option>
                    );
                })}

            </select>
            <label>Dish: </label>
            <input type="text" placeholder='Search' onChange={(e) => setHandleFilter(e.target.value)} />
            <button onClick={handlesearch}>Search</button>

        </div>
        <div className='checkout-div'>
        </div>
            <div className='home-div'>
                <h1>Data List</h1>
                <table>
                    <tr>
                        <th>Sr no.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Dish</th>
                        <th>Price</th>
                    </tr>

                    {val.map((result, index) => {
                        return (
                            <><tr key={index} >
                                <td >{i++}</td>
                                <td><img src={result.image} alt="" className='img' /></td>
                                <td>{result.name}</td>
                                <td>{result.dish}</td>
                                <td>{result.price}/Rs</td>
                                <td><button className='Cart' onClick={() => handleClick(result)}>
                                    ADD TO CART</button></td>
                            </tr></>
                        );
                    })}

                </table>
                
            </div>
        </>
    )
}

