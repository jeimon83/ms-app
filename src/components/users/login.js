import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../../axios-config";
import baseUrl from "../../api_routes/base_url";
import { useAuth } from "../../contexts/AuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();


  const handleLogin= () => {
    const user = {
      email: email,
      password: password
    }

  axios.post(baseUrl() + "/session", user).then((response) => {
    if (response.status === 200) {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("reload", 1);
      navigate("/welcome")
    } else {
      setResponse(response.data)
    }
    }).catch((error) => {
      setResponse(error.response.data.errors)
    })
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className='title'>Please, login to continue!</h1>
        {response && <div className="notification is-danger">{response}</div>}
        {}
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
