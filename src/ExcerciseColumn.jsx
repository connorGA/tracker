import React, { useState } from 'react';

export const ExcerciseColumn = () => {
  const [decisions, setDecisions] = useState([]);

  const handleDecision = (decision) => {
    setDecisions([...decisions, decision]);
  };

  return (
    <div>
      <h2>Exercise</h2>
      <div>
        <button onClick={() => handleDecision('Yes')}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'green' }}></div>
        </button>
        <button onClick={() => handleDecision('No')}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red' }}></div>
        </button>
      </div>
      <div>
        <strong>Decisions:</strong>
        <ul>
          {decisions.map((decision, i) => (
            <li key={i} style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
              {decision === 'Yes' ? (
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'green', marginRight: '8px' }}></div>
              ) : (
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', marginRight: '8px' }}></div>
              )}
              {decision}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

