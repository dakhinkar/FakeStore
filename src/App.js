
import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import Header from './containers/Header';
import CategoryHeader from './containers/CategoryHeader';
import ProductListinig from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import ProductTypeListing from './containers/ProductTypeListing';
import FavProducts from './containers/pages/FavProducts';
import CartProducts from './containers/pages/CartProducts';
import Sign from './containers/pages/Sign';
import Login from './containers/pages/Login';
import Inventory from './containers/pages/Inventory';
import { useSelector } from 'react-redux';
import useAuth from './redux/reducers/useAuth';

const App = () => {
    // let location = useLocation();
    // console.log(location.pathname);
    const { auth } = useAuth();
    return (
        <div >
            <Router>
                <Header />
                <CategoryHeader/>
                <Routes>
                    <Route
                        path='/' exact
                        element={<ProductListinig />}
                    />
                    <Route
                        path='/inventory' exact
                        element={<Inventory />}
                    />
                    {/* <Route
                        path='/user/signin/' exact
                        element={<Sign />}
                    />
                    <Route
                        path='/user/login/' exact
                        element={<Login />}
                    /> */}
                    <Route path='/products/categories/:category'
                        exact element={<ProductTypeListing />}
                    />
                    <Route path='/user/products/favourite/'
                        exact element={<FavProducts />}
                    />
                    <Route path='/user/products/shopping/'
                        exact element={<CartProducts />}
                    />
                    <Route path='/product/:productId'
                        exact element={<ProductDetails />}
                    />
                    <Route path="/user/login/" element={auth ? <Navigate to="/" /> : <Login />} />
                     <Route path="/user/signin/" element={auth ? <Navigate to="/" /> : <Sign />} />
                    <Route path='*' >404 Not Found</Route>
                </Routes>
            </Router>
        </div>
    )
}


export default App;
