// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // 로그인 페이지의 스타일이 필요하면 추가

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      navigate("/BlogMain");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패: " + error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>
        <img className="clover" alt="클로버" src="img/clover.png" />
        ⊂ト욘쨩의 블로ュ에 øłnㅓ오ŀ (۶•̀ᴗ•́)۶
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
      <span className="register" onClick={() => navigate("/register")}>
        회원가입
      </span>
    </div>
  );
}

export default Login;
