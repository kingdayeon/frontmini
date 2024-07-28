import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import BlogMain from "./pages/BlogMain";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={() => navigate("/BlogMain")}>이동</button>
    </div>
  );
}

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> {/* 로그인 경로 추가 */}
        <Route path="/BlogMain" element={<BlogMain />} />
        <Route path="/home" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
