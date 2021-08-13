import React, { useState } from 'react';
import { render } from "react-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../calendar/Calendar.css';

function ReactCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = date =>{
      setDate(date);
  };
  return (
    <div className="calender">
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default ReactCalendar;