// import React, { useState } from "react";
import "./App.css";
import Comment from "./component/comment";
import Project from "./component/project";


function App() {
  return (
 <>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#recommendations">Recommend</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="intro">
        <div className="intro-content">
          <h1>
            신입 백엔드 개발자.
            <br />
            Problem <span>Solver</span>.<br />
            김다연입니다.
          </h1>
          <div className="buttons">
            <a
              href="https://github.com/kingdayeon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link
            </a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume Link
            </a>
          </div>
        </div>
        <div className="intro-image">
          <img src="img/me.jpg" alt="Profile" />
        </div>
      </section>

      <section id="about">
        <h1>
          끊임없이 배우고
          <br />
          집요하게 해결하는 백엔드 개발자 김다연입니다.
        </h1>
        <p>
          항상 새로운 기술에 열려 있으며, 문제 해결에 대한 열정으로 프로젝트에
          참여합니다. <br />
          꾸준한 성장과 협업을 통해 새로운 아이디어를 탐험하고 효과적인 솔루션을
          찾는 것을 즐깁니다. <br />
          강력한 분석 및 문제 해결 능력으로 효율적이고 확장 가능한 코드를
          작성하는 것에 자부심을 가지고 있습니다.
          <br />
          팀과 함께 협력하며, 사용자 중심의 솔루션을 만들기 위해 노력하고
          있습니다.
          <br />
          끊임없는 도전을 통해 성장하는 개발자로서 기여하고 싶습니다.
        </p>
      </section>

      <section id="skills">
        <h2>기술 스택</h2>
        <p>
          지금까지 활용해 본 기술들입니다.
          <br />
          넓고 깊은 기술 스택을 얻기 위해 노력하고 있습니다.
        </p>
        <div className="skills-icons">
          <img src="img/html.png" alt="HTML5" />
          <img src="img/css.png" alt="CSS3" />
          <img src="img/js.png" alt="JavaScript" />
          <img src="img/react.png" alt="React" />
          <img src="img/icon.png" alt="Node.js" />
          <img src="img/bootstrap.png" alt="Bootstrap" />
          <img src="img/tailwind.png" alt="Tailwind" />
          <img src="img/sass.png" alt="Sass" />
          <img src="img/git.png" alt="Git" />
          <img src="img/greensock.png" alt="Greensock" />
          <img src="img/vscode.png" alt="Vscode" />
          <img src="img/github.png" alt="GitHub" />
        </div>
      </section>

      <section id="projects">
        <h2>내 프로젝트</h2>
        <Project/>
        <Project/>
        <Project/>
        {/* Repeat .project block for each project */}
      </section>

      <section id="recommendations">
        <h2>함께 개발한 동료들의 평가</h2>
        <div className="recommendations-container">
          <Comment />
          <Comment />
          <Comment />
          
          
        </div>
      </section>

      <section id="contact" style={{ padding: "60px" }}>
        <h1>
          끈끈함과 기술에 대한 집요함으로 <br />
          어떤 문제든 해결해내는 백엔드 개발자가 되겠습니다. <br />
          감사합니다! 😊
        </h1>
      </section>

      <section id="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="#">
              <img src="img/fb.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="img/insta.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="img/Linkedin.png" alt="LinkedIn" />
            </a>
            <button>Contact Me</button>
          </div>
          <p>Copyright ©2024 All rights reserved</p>
        </div>
      </section>
    </div></>
  );
}

export default App;
