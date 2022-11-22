import { ActionTypes } from "../constants/action-types";
const initialState = {
    products: [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.REMOVE_PRODUCT:
            return initialState;
        default:
            return state;
    }
}

export const selectedProductReducer = (state ={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
         case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}; 
        default:
            return state;
    }
}

export const categoryReducer = (state=[], {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_CATEGORIES:
            return [...state, payload];
        default:
            return state;
    }
}
//  Cart Reducer
export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            return [...state, payload];
        case ActionTypes.REMOVE_CART:
            return [...state.filter((s) => s._id != payload._id)];
        default:
            return state;
    }
}
//  Fav Reducer
export const favReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_FAV:
            return [...state, payload];
        case ActionTypes.REMOVE_FAV:
            return [...state.filter((s) => s._id != payload._id)];
        default:
            return state;
    }
}

// Login/SignUp Reducer
const initialUser = {
    username: "",
    token: "",
    email: "",
    isAdmin: "",
    _id: "",
}
export const userReducer = (state = initialUser, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return {...state, ...payload};
        case ActionTypes.RESET_USER:
            return {...initialUser};
        default:
            return state;
    }
}