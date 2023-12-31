// Calendar.js
import React, { useState, useEffect } from 'react';
import { startOfYear, endOfYear, isSameDay, isBefore, isAfter, format } from 'date-fns';
import './Calendar.css'; // Import your CSS file for styling

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update current date every second

    return () => clearInterval(interval);
  }, []);

  const startOfCurrentYear = startOfYear(currentDate);
  const endOfCurrentYear = endOfYear(currentDate);

  const isCurrentDay = (date) => isSameDay(date, currentDate);
  const isPastDay = (date) => isBefore(date, currentDate);
  const isFutureDay = (date) => isAfter(date, currentDate);

  const generateCalendar = () => {
    const calendar = [];
    let startOfMonth = startOfYear(currentDate);

    while (isBefore(startOfMonth, endOfCurrentYear)) {
      const monthDays = [];
      const monthLabel = format(startOfMonth, 'MMMM');

      // Render days for the current month
      for (let i = 0; i < 31; i++) {
        const currentDay = new Date(startOfMonth);
        currentDay.setDate(startOfMonth.getDate() + i);

        if (isAfter(currentDay, endOfCurrentYear) || currentDay.getMonth() !== startOfMonth.getMonth()) {
          // Stop generating days if we are beyond the end of the year or the next month has started
          break;
        }

        monthDays.push(
          <div
            key={currentDay.toString()}
            className={`calendar-day ${
              isCurrentDay(currentDay) ? 'current-day' : isPastDay(currentDay) ? 'past-day' : 'future-day'
            }`}
          >
            {format(currentDay, 'd')}
          </div>
        );
      }

      // Render the small calendar for the current month
      const smallCalendar = (
        <div className="small-calendar">
          {monthDays.map((day) => (
            <div key={day.key} className={day.props.className}>
              {day.props.children}
            </div>
          ))}
        </div>
      );

      calendar.push(
        <div key={startOfMonth.toString()} className={`calendar-month ${monthLabel.toLowerCase()}`}>
          <h5>{monthLabel}</h5>
          {smallCalendar}
        </div>
      );

      startOfMonth.setMonth(startOfMonth.getMonth() + 1); // Move to the next month
    }

    return calendar;
  };

  return (
    <div className="calendar-container">
      <div className="calendar">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;

