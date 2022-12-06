import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToFav, removeFromCart, removeFromFav } from "../redux/actions/productAction";

const Cart = ({ product }) => {
    const cart = useSelector((state) => state.cart);
    const fav = useSelector((state) => state.favourite);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { _id, title, image, price, category } = product;
    let cardContains = cart.filter(c => c._id === _id );
    let favContains = fav.filter(c => c._id === _id);
    // console.log('product: ', product)
    // console.log("card contains: filter :  ", cardContains);
    cardContains = cardContains.length == 0 ? false : true;
    favContains = favContains.length == 0 ? false : true;

    const [count, setCount] = useState(1);

  const increamentHandler = () => {
    setCount((prev) => prev + 1);
  };
   const decrementHandler = () => {
     setCount((prev) => prev-1);
  };

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
    const removeChartHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (!user.token) {
        return;
      }
        dispatch(removeFromCart(product));
    }
    return (
        <div className="cardContainer">

            <div className="imageSection">
                <img src={image} alt={title} />
                <div className="counterSection">
                    <button onClick={decrementHandler} disabled={count <= 1 ? true : false}> - </button>
                    <span> {count}</span>
                    <button onClick={increamentHandler} disabled={count >= 5 ? true : false}>+</button>
                </div>
            </div>
            <div className="infoSection">
                <div className="header">{title}</div>
                <div className="price">$ {price}
                </div>
                <div className="metaCategory">{category}</div>
                <div className="actionEvents">
                <button onClick={removeChartHandler}>
                   <i class="trash alternate outline icon"></i>
                </button>
                  <button className="save" onClick={(e) => addToFavHandler(e)}>{favContains ? "Unsave" : "Save for later"}</button>
                </div>
            </div>


        </div>
    )

}
  


export default Cart;
