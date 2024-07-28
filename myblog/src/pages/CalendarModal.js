import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Custom CSS file for additional styling

function CalendarModal(props) {
  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
        <div className="calendar-container">
          <Calendar onChange={props.onChange} value={props.value} />
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;
