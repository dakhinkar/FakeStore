import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, categoryReducer, cartReducer, favReducer, userReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    categories: categoryReducer,
    cart: cartReducer,
    favourite: favReducer,
    user : userReducer
});

export default reducers;