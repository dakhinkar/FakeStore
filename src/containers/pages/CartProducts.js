import { useSelector, useDispatch } from 'react-redux';
import {setProducts, fetchProducts } from '../../redux/actions/productAction';
import ProductComponent from '../ProductComponent';
import { useEffect } from 'react';
import CartComponent from './CartComponent';


const CartProducts = () => {
  const cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //       dispatch(fetchProducts());
        
  //       const cartProduct = products.filter((product) => cart.includes(product.id));
  //       dispatch(setProducts(cartProduct));
  //   },[])
    return (
        <div className='ui container mainContainer'>
          {
          cart.length > 0 ? (
            <>
            <div className='mainCardConatiner'>
              <CartComponent data={cart} />
            </div>
            <div className='finalPriceDetails'>
                <div className='header'>
                  PRICE DETAILS
                  
                </div>
                <hr/>
                <div className='priceDeatails'>
                  <div className='priceInfo' >
                    <span className='itemName'>Price Item</span>
                    <span>10994</span>
                  </div>
                  <div className='priceInfo'>
                    <span className='itemName'>Delivery Charges</span>
                    <span>FREE</span>
                  </div>
                  <div className='priceInfo'>
                     <span className='itemName'>Delivery Charges</span>
                    <span>FREE</span>
                  </div>
                  <div className='priceInfo'>
                    <span className='itemName'>Secured Packaging Fee</span>
                    <span>29</span>
                  </div>
                </div>
                <hr/>
                 <div className='priceInfo footer totalPrice '>
                  <span className='itemName '>Total Amount</span>
                  <span>10994</span>
                </div>
            </div>
            </>
          
          ) : (<p>Empty Cart</p>)
            
          }
        </div>
    );
};

export default CartProducts;
