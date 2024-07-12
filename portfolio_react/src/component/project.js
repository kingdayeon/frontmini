import React from "react";

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
        <img
          src={`${process.env.PUBLIC_URL}/img/washingturtle.png`}
          alt="turtles"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/washingturtle.png`}
          alt="turtles"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/washingturtle.png`}
          alt="turtles"
        />
      </div>
    </div>
  );
}
