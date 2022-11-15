import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const Header = () => {
    const cart = useSelector((state) => state.cart);
    const cartCount = cart.length;
    const favourite = useSelector((state) => state.favourite);
    const favCount = favourite.length;
    return (
        <div className="ui fixed menu">
            <Link to={"/"} >
                <h2 class="item">FakeShop</h2>
            </Link>
            <div class="right menu">
                <Link to={"/user/products/shopping/"}>
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
                
                <Link to={"/user/signin/"}>
                    <a class="ui item">Sign In</a>
                </Link>
                <Link to={"/user/login/"}>
                     <a class="ui item">Log In</a>
                </Link>
                
                <a class="ui item">
                    Logout
                </a>
            </div>
        </div>
    )
};

export default Header;
