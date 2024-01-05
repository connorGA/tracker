import React from 'react';

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

  // Determine the color for each day
  const getDayColor = (dayIndex, hours) => {
    if (dayIndex + 1 > currentDayOfYear) {
      return 'darkgrey'; // Future day
    }
    return hours > 0 ? (hours >= goalHours ? 'green' : 'lightgreen') : 'darkgrey'; // Past day with or without logged hours
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
    <div>
      <h2>{itemData ? `${itemData.itemName}` : 'No Item Created'}</h2>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        {daysInMonths.map((_, monthIndex) => (
          <div key={monthIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1' }}>
            <span style={{ marginBottom: '5px' }}>{new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}</span>
            {generateWeeks(generateDays(monthIndex)).map((week, weekIndex) => (
              <div key={weekIndex} style={{ display: 'flex', gap: '2px', marginBottom: '5px' }}>
                {week.map((hours, dayIndex) => {
                  const dayOfYear = daysInMonths.slice(0, monthIndex).reduce((a, b) => a + b, 0) + weekIndex * 7 + dayIndex;
                  return (
                    <div
                      key={dayIndex}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: getDayColor(dayOfYear, hours),
                      }}
                      title={`Day ${dayIndex + 1} of Week ${weekIndex + 1} in ${new Date(currentYear, monthIndex).toLocaleString('default', { month: 'short' })}: ${hours || 0} hours`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};