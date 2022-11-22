
import { useSelector, useDispatch } from 'react-redux';
import {setProducts } from '../../redux/actions/productAction';
import ProductComponent from '../ProductComponent';
import { useEffect } from 'react';

const FavProducts = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.favourite);
  // const favProduct = products.filter((product) => fav.includes(product.id));
  // console.log("fav Products: ", favProduct);
  //   const dispatch = useDispatch();

  // useEffect(() => {
  //        dispatch(setProducts(favProduct));
       
  //   },[fav])
  const user = useSelector((state) => state.user);
    return (
      <div className='ui grid container'>
        
        {
          user.token && fav.length > 0 ?  <ProductComponent data={fav}/> : <p className=''>Favourite List is Empty</p> 
          
        }
           
        </div>
    );
};

export default FavProducts;
