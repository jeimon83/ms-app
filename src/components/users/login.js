import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const handleLogin= () => {
    const user = {
      email: email,
      password: password
    }

   auth.login(user);
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className='title'>Please, login to continue!</h1>
        <label className="label">Email</label>
        <div className="control">
          <input 
            className="input" 
            type="email" 
            placeholder="Email"
            value="jaime3@gmail.com"
            onChange={e => setEmail(e.target.value)}  
          />
        </div>
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value="Plum3r0z"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="control">
          <button 
            className="button is-info is-responsive" 
            onClick={handleLogin}
          >
              Login
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login;
