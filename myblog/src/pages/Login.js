// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 로그인 페이지의 스타일이 필요하면 추가

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = "dayeon";
    const validPassword = "0706";
    //여기서는 하드코딩할게여 . .

    if (username === validUsername && password === validPassword) {
      navigate("/BlogMain");
    } else {
      alert("땡입니다 다연이한테 물어보셈");
    }
  };

  return (
    <div className="login-container">
      <h2>
        <img className="clover" alt="클로버" src="img/clover.png" />
        ⊂ト욘쨩의 블로ュના øłnㅓ오ŀ (۶•̀ᴗ•́)۶
        <img className="clover" alt="클로버" src="img/clover.png" />
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
