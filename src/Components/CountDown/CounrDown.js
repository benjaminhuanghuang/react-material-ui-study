import React from 'react';

import './CountDown.css'
export default () => {
  return (
    <div className="countdown">
      <div className="countdown-label">Event starts in</div>
      <div className="countdown-timer">
        <span className="countdown-timer-digit">
          <span className="countdown-timer-number">
            1
          </span>
          hours
        </span>
        <span className="countdown-timer-digit">
          <span className="countdown-timer-number">
            1
          </span>
          minutes
        </span>
        <span className="countdown-timer-digit">
          <span className="countdown-timer-number">
            1
          </span>
          seconds
        </span>
      </div>
    </div>
  )
}