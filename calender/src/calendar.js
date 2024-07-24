import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Custom CSS file for additional styling

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar onChange={onChange} value={value} calendarType="islamic" />
    </div>
  );
}
