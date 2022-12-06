import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToFav, removeFromCart, removeFromFav } from "../../redux/actions/productAction";
import Cart from "../Cart";

const CartComponent = ({data}) => {
 
  let products = useSelector((state) => state.allProducts.products);
  
  if (data) {
    products = data;
  }
    
    return (
        <>
        {
          
          Object.keys(products).length === 0  && (
            <div class="ui">
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          ) 
          
        }
        {
         Object.keys(products).length !== 0 && products.map((product, index) => <Cart key={index} product={product}/>)
        }
        </>
        
    );
};


export default CartComponent;
