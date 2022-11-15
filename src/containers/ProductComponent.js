

import { useSelector, useDispatch } from 'react-redux';

import {removeFromCart, addToCart, addToFav, removeFromFav } from '../redux/actions/productAction';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProductComponent = ({data}) => {

  let products = useSelector((state) => state.allProducts.products);
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.favourite);
  const dispatch = useDispatch();
  if (data) {
    products = data;
  }
    // const { id, title } = product[0];
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    let cardContains = cart.filter(c => c.id == id );
    let favContains = fav.filter(c => c.id == id);
    console.log(cardContains);
    cardContains = cardContains.length == 0 ? false : true;
    favContains = favContains.length == 0 ? false : true;
    const addToChartHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log("cart : ", cart);
      if (cardContains) {
        console.log("remove from cart");
        dispatch(removeFromCart(product));
      } else {
        console.log("add to cart cart");
         dispatch(addToCart(product));
      }
    }
    const addToFavHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (favContains) {
        console.log("remove from fav");
        dispatch(removeFromFav(product));
      } else {
        console.log("add to fav");
         dispatch(addToFav(product));
      }
    }
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
               
              <div className=" relative image ">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}
                </div>
                <div className="meta">{category}</div>
              </div>
              <button class={`ui toggle button ${cardContains ? 'red': ""}`} onClick={(e) => addToChartHandler(e)}>
                <i class="shop icon"></i>
                {cardContains ? 'remove from cart': "Add to Cart"}
              </button>
              <button class={`ui toggle button ${favContains ? 'teal': ""}`} onClick={(e) => addToFavHandler(e)}>
                <i class={`like icon ${favContains ? 'red': ""}`}></i>
                {favContains ? 'remove from favourite': "Add to favourite"}
              </button>
            </div>
          </div>
        </Link>
      </div>
    )
  });

    return (
        <>
        {
          
          Object.keys(products).length === 0 ? (
            <div class="ui">
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          ) : (
              renderList
          )
          
        }
        </>
        
    );
};

export default ProductComponent;
