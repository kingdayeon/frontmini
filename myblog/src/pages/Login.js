// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // 로그인 페이지의 스타일이 필요하면 추가

function Login() {
  const [username, setUsername] = useState(""); // username 상태를 관리
  const [password, setPassword] = useState(""); // password 상태를 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수 사용

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막음

    try {
      // axios를 사용하여 로그인 요청을 서버로 보냄
      await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      // 로그인 성공 시 BlogMain 페이지로 이동
      navigate("/BlogMain");
    } catch (error) {
      console.error("로그인 실패:", error);
      // 로그인 실패 시 에러 메시지를 alert로 표시
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
