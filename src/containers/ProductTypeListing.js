
import { useSelector, useDispatch } from 'react-redux';

import { fetchProductCategory } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ProductTypeListing = () => {
    const {category} = useParams();
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductCategory(category));
    },[category])
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};

export default ProductTypeListing;