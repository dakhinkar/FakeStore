import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutHandler } from "../redux/actions/productAction";
const Header = () => {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const { token, email, username} = user;
    const cartCount = cart.length;
    const favourite = useSelector((state) => state.favourite);
    const favCount = favourite.length;
    const dispatch = useDispatch();
    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutHandler());
    }
    return (
        <div className="ui fixed menu">
            <Link to={"/"} >
                <h2 class="item">FakeShop</h2>
            </Link>
           
            <div class="right menu">
                {/* <Link to={"/inventory"} >
                    <a class="ui item">Inventory</a>
                </Link> */}
                { token && <><Link to={"/user/products/shopping/"}>
                    <a class="ui item counter">
                        <i class="shop icon"></i>
                        <button class="count">{cartCount}</button>
                    </a>
                </Link>
                <Link to={"/user/products/favourite/"}>
                    <a class="ui item counter">
                        <i class="like icon"></i>
                         <button className="count">{favCount}</button>
                    </a>
                </Link>
                </>
                }
                
               {!token && <> <Link to={"/user/signin/"}>
                    <a class="ui item">Sign In</a>
                </Link>
                <Link to={"/user/login/"}>
                     <a class="ui item">Log In</a>
                </Link> </>}
                
                {token && <a class="ui item" onClick={(e) => logout(e)} >
                    Logout
                </a>}
            </div>
        </div>
    )
};

export default Header;
