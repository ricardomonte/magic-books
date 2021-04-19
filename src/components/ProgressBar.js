import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="progress-bar">
      <CircularProgressbar
        styles={{ root: { width: '150px', height: '150px' } }}
        value={percentage}
      />
      <div className="text-bar">
        <h2>
          {percentage}
          %
        </h2>
        <h3>Completed</h3>
      </div>
    </div>
  );
};

export default ProgressBar;
