// src/pages/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "사용자명이 이미 존재합니다." });
  }

  users.push({ username, password, email });
  res.status(201).json({ message: "회원가입 성공" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ message: "아이디 또는 비밀번호가 틀립니다." });
  }

  res.status(200).json({ message: "로그인 성공" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
