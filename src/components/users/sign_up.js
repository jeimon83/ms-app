import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../../axios-config";
import baseUrl from "../../api_routes/base_url";

function SignUp() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp= () => {
    const user = {
      email: email,
      password: password
    }

  axios.post(baseUrl() + "/registration", user).then((response) => {
    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/welcome");
    } else {
      setResponse(response.data)
    }
    }).catch((error) => {
      if (error.response.data.error === "Email has already been taken") {
        setResponse(error.response.data.error)
      } else if (error.response.data.error === "Invalid email. Only @mundosatelital emails are allowed") {
        setResponse(error.response.data.error)
      } else if (error.response.data.error === "Password is too short (minimum is 6 characters)") {
        setResponse(error.response.data.error)
      } else {
        setResponse("Ops! There was an error. Please try again.")
      }
    })
  }

  return (
    <section className="section">
      <div className="box">
        <h1 className='title'>Sign Up</h1>
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
          <button className="button is-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
