import React from 'react';
import './Column.css'; // Make sure the path to your CSS file is correct

export const Column = ({ itemData }) => {
  const goalHours = 2; // Define your goal hours
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Leap year check
  const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
  const daysInYear = isLeapYear(currentYear) ? 366 : 365;

  // Days in each month
  const daysInMonths = [31, 28 + (isLeapYear(currentYear) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Calculate the current day of the year
  const startOfYear = new Date(currentYear, 0, 1);
  const currentDayOfYear = Math.ceil((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

  // Initialize an array for the year with null values
  const timesArray = itemData && itemData.times ? itemData.times : Array(daysInYear).fill(null);

  // Determine the class for each day
  const getDayClass = (dayIndex, hours) => {
    if (dayIndex + 1 > currentDayOfYear) {
      return 'day day-future'; // Future day
    }
    if (hours > 0) {
      return hours >= goalHours ? 'day day-current-green' : 'day day-current-lightgreen';
    }
    return 'day day-past'; // Past day without logged hours
  };

  // Generate the days for each month
  const generateDays = (monthIndex) => {
    const monthStart = daysInMonths.slice(0, monthIndex).reduce((a, b) => a + b, 0);
    return timesArray.slice(monthStart, monthStart + daysInMonths[monthIndex]);
  };

  // Generate the weeks for each month
  const generateWeeks = (days) => {
    let weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  };

  return (
    <div className="column-container">
      <h2>{itemData ? `${itemData.itemName}` : ''}</h2>
      {daysInMonths.map((_, monthIndex) => (
        <div key={monthIndex} className="month-container">
          <span className="month-label">{new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}</span>
          {generateWeeks(generateDays(monthIndex)).map((week, weekIndex) => (
            <div key={weekIndex} className="week-container">
              {week.map((hours, dayIndex) => {
                const dayOfYear = daysInMonths.slice(0, monthIndex).reduce((a, b) => a + b, 0) + weekIndex * 7 + dayIndex;
                return (
                  <div
                    key={dayIndex}
                    className={getDayClass(dayOfYear, hours)}
                    title={`Day ${dayIndex + 1} of Week ${weekIndex + 1} in ${new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}: ${hours || 0} hours`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
