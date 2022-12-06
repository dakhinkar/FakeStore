import { redirect } from 'react-router-dom';
import fakeStoreApi from '../../apis/fakeStoreApi';
import { ActionTypes } from '../constants/action-types';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';



// Fetch all categoery
export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT });
    
    // const response = await fakeStoreApi.get("http://localhost:8000/api/products/");
    // console.log(response);
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

// Fetch product by categoery
export const fetchProductCategory = (categoeryType) => async (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT });
    console.log("fetch product category type");
    const response = await fakeStoreApi.get(`/products/categories/${categoeryType}`);
    console.log('response : ', response);
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
}

// Fetch Categoery list => 
export const fectCategories = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products/categories");
    dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
}

// fetch single item
export const fetchProduct = (productId) => async (dispatch) => {
    console.log("in Fetch product");
    const response = await fakeStoreApi.get(`/products/${productId}`);
    console.log("fetch product", response);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,       
    }
};

// Cart operation
export const addToCart = (product) => {
 return {
        type: ActionTypes.ADD_CART,
        payload: product
    }   
}
export const removeFromCart = (product) => {
 return {
        type: ActionTypes.REMOVE_CART,
        payload: product
    }   
}

// Fav Operation
export const addToFav = (product) => {
 return {
        type: ActionTypes.ADD_FAV,
        payload: product
    }   
}
export const removeFromFav = (product) => {
 return {
        type: ActionTypes.REMOVE_FAV,
        payload: product
    }   
}

// Login 
export const login = ({username, password}) => async (dispatch) => {

    console.log("Login User", username);
  
    const response = await fakeStoreApi.post(`/auth/login/`, {
        username,
        password
    });
    // console.log("fetch product", response);
     dispatch({ type: ActionTypes.SET_USER, payload: response.data });
     
};
// Sign Up
export const signUp = ({username,email, password}) => async (dispatch) => {
    const response = await fakeStoreApi.post(`/auth/register/`, {
        username,
        email,
        password
    });
    dispatch(login({ username, password }));
   
}
// Logout
export const logoutHandler = () => async (dispatch) => {
    dispatch({ type: ActionTypes.RESET_USER });
}

