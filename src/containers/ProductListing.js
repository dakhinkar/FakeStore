
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import { useEffect } from 'react';
const ProductListinig = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log(err));
    //     dispatch(setProducts(response.data));
//
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    },[])
    console.log("products: ", products);
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};

export default ProductListinig;
