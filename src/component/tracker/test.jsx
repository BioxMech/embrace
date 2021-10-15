import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar, utils } from "react-modern-calendar-datepicker";

function Test({ startPeriodDate, daysLast, cycleCount, render}) {

  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      minimumDate={utils().getToday()}
      shouldHighlightWeekends
    />
  );
}

export default Test;