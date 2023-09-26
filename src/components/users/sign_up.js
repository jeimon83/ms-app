import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignUp= () => {
    const user = {
      email: email,
      password: password,
      confirm_password: confirm_password
    }

    navigate("/");
  }

  return (
    <section className="section">
      <div className="box">
        <div>Login</div>
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
        <label className="label">Confirm Password</label>
        <div className="control">
          <input
            className="input"
            type="confirm_password"
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
