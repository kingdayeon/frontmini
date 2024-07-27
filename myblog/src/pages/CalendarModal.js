import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Custom CSS file for additional styling

export default function CalendarModal({ isOpen, onClose }) {
  const [value, onChange] = React.useState(new Date());

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="calendar-container">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}
