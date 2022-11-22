import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signUp } from "../../redux/actions/productAction";
const Sign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = (url) => {
    navigate(url);
  } 
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if(user.token)
      redirect("/");
  }, [user.token])
   
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(signUp({ username, email, password }));
  }
  
  return (
    <div className='formContainer'>
      <div class='sign'>
        <h3 class="ui block header">
          Sign Up
        </h3>
        <div class="ui left icon input">
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <i class="user icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i class="envelope icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange ={(e) => setPassword(e.target.value)}
          />
            <i class="key icon"></i>
        </div>
        <div class='footer'>
          <button onClick={(e) => registerHandler(e)}>Sign Up</button>
          <a onClick={(e) => redirect('/user/login/')}>Have an account?</a>
        </div>
      </div>
      
    </div>
  );
};
export default Sign;
