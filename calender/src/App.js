import React from "react";
import "./App.css";
import MyCalendar from "./calendar";
import "react-calendar/dist/Calendar.css";

const App = () => {
  return (
    <div className="App">
      <h1>My React Calendar</h1>
      <MyCalendar />
    </div>
  );
};

export default App;
