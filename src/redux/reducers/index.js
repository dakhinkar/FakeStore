import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, categoryReducer, cartReducer, favReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    categories: categoryReducer,
    cart: cartReducer,
    favourite: favReducer,
});

export default reducers;