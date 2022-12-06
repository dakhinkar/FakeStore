import { useSelector } from "react-redux";

// import Cookies from "js-cookie";
const useAuth = () => {
    // const token = Cookies.get("access-token");
    const user = useSelector(state => state.user);
    let auth = null;
    if (user.token) { auth = user.token; }
    return { auth };
};
export default useAuth;
