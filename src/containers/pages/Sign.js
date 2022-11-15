import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Sign = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/user/login/')
  } 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
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
            onClick={(e)=> setUsername(e.target.value)}
          />
          <i class="user icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onClick={(e) => setEmail(e.target.value)}
          />
          <i class="envelope icon"></i>
        </div>
        <div class="ui left icon input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onClick ={(e) => setPassword(e.target.value)}
          />
            <i class="key icon"></i>
        </div>
        <div class='footer'>
          <button >Sign Up</button>
          <a onClick={redirect}>Have an account?</a>
        </div>
      </div>
      
    </div>
  );
};
export default Sign;
