import React from 'react'

export const DateComponent = () => {
    const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '18px' }}>
    {currentDate}
    </div>
  )
}
