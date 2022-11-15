import axios from 'axios';
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProduct, removeSelectedProduct, fetchProduct,removeFromCart, addToCart, addToFav, removeFromFav } from '../redux/actions/productAction';
const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log("product: " , product)
    const {image, title, price, category,description } = product;
    const {productId} = useParams();
    // console.log("product details", product);

    const dispatch = useDispatch();
    const id = parseInt(productId);
    const cart = useSelector((state) => state.cart);
    const fav = useSelector((state) => state.favourite);
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
    // const fetchProductDetail = async() => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => console.log(err));
    //     dispatch(selectedProduct(response.data));

    // }
    useEffect(() => {
      if (productId && productId !== "") {
        console.log("here");
         dispatch(fetchProduct(productId));
      }
          
        return () => {
            dispatch(removeSelectedProduct());
        }

    },[productId])
    return (
        <div className='ui grid container'>
            {
                Object.keys(product).length === 0 ? (
                    <div class="ui">
                      <div class="ui active inverted dimmer">
                        <div class="ui text loader">Loading</div>
                      </div>
                      <p></p>
                    </div>
                ) : (   
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                      {/* <div class="ui grid">
                        <div class="three column row "> */}
                    <button
                          class={`ui toggle button left floated column medium ${cardContains ? 'red' : ""}`}
                          onClick={(e) => addToChartHandler(e)}>
                            <i class="shop icon"></i>
                          {
                            cardContains ? 'remove from cart' : "Add to Cart"
                          }
                    </button>
                    <button
                          class={`ui toggle button right floated column medium center ${favContains ? 'teal' : ""}`}
                          onClick={(e) => addToFavHandler(e)}>
                            <i class={`like icon ${favContains ? 'red': ""}`}></i>
                          {
                            favContains ? 'remove from favourite' : "Add to favourite"
                          }
                          </button>
                          {/* </div>
                </div>       */}
                 
              </div>
            </div>
          </div>
        </div>
    )
    }
            
       </div>
    );
};

export default ProductDetails
