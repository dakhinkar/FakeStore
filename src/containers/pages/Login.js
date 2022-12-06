import React, {useEffect, useState} from "react";
import { useNavigate, redirect } from "react-router-dom";
import { login } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  } 
  const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   if(user.token)
  //     redirect("/");
  // }, [user.token]);
  const [username, setUsername] = useState('');
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }
  const [password, setPassword] = useState('');
   const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const loginHandler = (e) => {
    e.preventDefault();
    // console.log("login call");
    dispatch(login({ username, password }));
    // const users = useSelector((state) => state.user);
    // console.log("login : ", user); // {}

    // redirect("/");
    // // if (user.token) {
    // //   redirect("/");
    // // }
    
    // setTimeout(() => {
    //    if (user.token) {
    //      console.log("director ");
    //      navigate("/");
    //   redirect("/");
    // }
    // },1000)
   
  }
  return (
    <div className='formContainer'>
      <div class='login'>
        <h3 class="ui block header">
          Log In
        </h3>
        <div class="ui left icon input">
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => usernameHandler(e)}
          />
          <i class="user icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
            <i class="key icon"></i>
        </div>
        <div class='footer'>
          <button onClick={(e) => loginHandler(e)} >Log in</button>
          <a onClick={(e) => redirect('/user/signin/')}>Create new account?</a>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
