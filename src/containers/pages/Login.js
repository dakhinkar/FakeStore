import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/user/signin/')
  } 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
            onClick={(e) => setUsername(e.target.value)}
          />
          <i class="user icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onClick={(e) => setPassword(e.target.value)}
          />
            <i class="key icon"></i>
        </div>
        <div class='footer'>
          <button >Log in</button>
          <a onClick={redirect}>Create new account?</a>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
