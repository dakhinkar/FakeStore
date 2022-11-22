

import { useSelector, useDispatch } from 'react-redux';

import {removeFromCart, addToCart, addToFav, removeFromFav } from '../redux/actions/productAction';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProductComponent = ({data}) => {

  let products = useSelector((state) => state.allProducts.products);
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.favourite);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (data) {
    products = data;
  }
    // const { id, title } = product[0];
  const renderList = products.map((product) => {

    const { _id, title, image, price, category } = product;
    let cardContains = cart.filter(c => c._id === _id );
    let favContains = fav.filter(c => c._id === _id);
    // console.log('product: ', product)
    // console.log("card contains: filter :  ", cardContains);
    cardContains = cardContains.length == 0 ? false : true;
    favContains = favContains.length == 0 ? false : true;
    const addToChartHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (!user.token) {
        return;
      }
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
       if (!user.token) {
        return;
      }
      if (favContains) {
        console.log("remove from fav");
        console.log("remove from fav  lnlklkjlkjlk: ",product);
        dispatch(removeFromFav(product));
      } else {
        console.log("add to fav");
         dispatch(addToFav(product));
      }
    }
    return (
      <div className="four wide column" key={_id}>
        <Link to={`/product/${_id}`}>
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
              <button class={`ui toggle button ${user.token && cardContains ? 'red': ""}`} onClick={(e) => addToChartHandler(e)}>
                <i class="shop icon"></i>
                {user.token && cardContains ? 'remove from cart': "Add to Cart"}
              </button>
              <button class={`ui toggle button ${user.token && favContains ? 'teal': ""}`} onClick={(e) => addToFavHandler(e)}>
                <i class={`like icon ${user.token && favContains ? 'red': ""}`}></i>
                {user.token && favContains ? 'remove from favourite': "Add to favourite"}
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
