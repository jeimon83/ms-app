import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect_uri = location.state?.from ? location.state.from : "/";

  const handleLogin = () => {
    const user = {
      email: email,
      password: password
    }

    auth.login(user);
    navigate(redirect_uri, { replace: true });
  }

  return (
    <section className="section">
      <div className="box">
        <div>Welcome Back!</div>
        <label className="label">Email</label>
        <div className="control">
          <input 
            className="input" 
            type="email" 
            placeholder="Email" 
            onChange={e => setEmail(e.target.value)}  
          />
        </div>
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login;
