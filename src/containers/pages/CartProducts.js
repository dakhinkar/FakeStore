import { useSelector, useDispatch } from 'react-redux';
import {setProducts, fetchProducts } from '../../redux/actions/productAction';
import ProductComponent from '../ProductComponent';
import { useEffect } from 'react';

const CartProducts = () => {
  const cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //       dispatch(fetchProducts());
        
  //       const cartProduct = products.filter((product) => cart.includes(product.id));
  //       dispatch(setProducts(cartProduct));
  //   },[])
    return (
        <div className='ui grid container'>
          {
            cart.length > 0 ?  (<ProductComponent data={cart}/> ): (<p>Empty Cart</p> )
            
          }
        </div>
    );
};

export default CartProducts;
