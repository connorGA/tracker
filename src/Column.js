import React from 'react';
import './Column.css'; // Ensure your CSS supports this structure

export const Column = ({ itemData }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
  const daysInYear = isLeapYear(currentYear) ? 366 : 365;

  const daysInMonths = [31, 28 + (isLeapYear(currentYear) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const startOfYear = new Date(currentYear, 0, 1);
  const currentDayOfYear = Math.ceil((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

  const getDayClass = (dayIndex, hours, goalHours) => {
    if (dayIndex + 1 > currentDayOfYear) {
      return 'day day-future';
    }
    return hours >= goalHours ? 'day day-current-green' : 'day day-past';
  };

  const generateDays = (monthIndex, trackerItem) => {
    const monthStart = daysInMonths.slice(0, monthIndex).reduce((a, b) => a + b, 0);
    const daysInThisMonth = daysInMonths[monthIndex];
  
    // Check if trackerItem.times is defined and is an array
    if (trackerItem && Array.isArray(trackerItem.times)) {
      return trackerItem.times.slice(monthStart, monthStart + daysInThisMonth);
    } else {
      // Return an array of nulls if times is undefined
      return Array(daysInThisMonth).fill(null);
    }
  };
  

  const generateWeeks = (days) => {
    let weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  };

  return (
    <div className="column-container">
      {itemData && itemData.map((trackerItem, trackerIndex) => (
        <div key={trackerIndex} className="tracker-item-container">
          <div className="tracker-item-info">
            <h3 className="tracker-item-name">{trackerItem.name}</h3>
            <div>Goal Hours per Day: {trackerItem.goalHours}</div>
          </div>
          <div className="tracker-item-progress-bar">
            <div 
              className="tracker-item-progress" 
              style={{ width: `${(trackerItem.hoursCollected / (trackerItem.goalHours * daysInYear)) * 100}%` }}
            ></div>
          </div>
          <div className="tracker-item-calendar">
            {daysInMonths.map((_, monthIndex) => (
              <div key={monthIndex} className="month-container">
                <span className="month-label">
                  {new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}
                </span>
                {generateWeeks(generateDays(monthIndex, trackerItem)).map((week, weekIndex) => (
                  <div key={weekIndex} className="week-container">
                    {week.map((hours, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={getDayClass(dayIndex, hours, trackerItem.goalHours)}
                        title={`Day ${dayIndex + 1} of Week ${weekIndex + 1} in ${new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}: ${hours || 0} hours`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};