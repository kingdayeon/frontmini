import React from "react";
import turtle from "../img/washingturtle.png"; //의문 이게 왜 됨??

export default function Project() {
  return (
    <div className="project">
      <div className="project-details">
        <h3>washingturtle</h3>
        <p>React, Typescript, MobX</p>
        <p>테크노경영을 위해 워싱터틀을 디자인 했습니다!</p>
        <a href="#">노션링크</a>
        <a href="#">깃허브링크</a>
      </div>
      <div className="project-images">
        <img src={turtle} alt="turtles" />
        <img src={turtle} alt="turtles" />
        <img src={turtle} alt="turtles" />
      </div>
    </div>
  );
}
