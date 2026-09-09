import React, { useState, useEffect } from 'react';
import './FootballCountdown.css';

const FootballCountdown = () => {
  const targetDate = new Date('2026-10-10T00:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 16);
    return () => clearInterval(timer);
  }, [targetDate]);

  const ms = timeLeft % 1000;
  const totalSeconds = Math.floor(timeLeft / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  const nextDays = days > 0 ? days - 1 : 0;
  const nextHours = hours === 0 ? 23 : hours - 1;
  const nextMinutes = minutes === 0 ? 59 : minutes - 1;
  const nextSeconds = seconds === 0 ? 59 : seconds - 1;

  const secsFrac = ms / 1000;
  const minsFrac = (seconds + secsFrac) / 60;
  const hoursFrac = (minutes + minsFrac) / 60;
  const daysFrac = (hours + hoursFrac) / 24;

  const renderOdometerDigit = (currentVal, nextVal, frac) => {
    const tens = Math.floor(currentVal / 10);
    const units = currentVal % 10;
    const nextTens = Math.floor(nextVal / 10);
    const nextUnits = nextVal % 10;

    const tensFrac = (units === 0) ? frac : 0;
    const unitsFrac = frac;

    return (
      <div className="odometer-pair">
        <div className="roll-window">
          <div className="roll-track" style={{ transform: `translateY(-${(1 - tensFrac) * 50}%)` }}>
            <div className="roll-number">{nextTens}</div>
            <div className="roll-number">{tens}</div>
          </div>
        </div>
        <div className="roll-window">
          <div className="roll-track" style={{ transform: `translateY(-${(1 - unitsFrac) * 50}%)` }}>
            <div className="roll-number">{nextUnits}</div>
            <div className="roll-number">{units}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-wrapper">
      <div className="countdown-title">
        COUNTDOWN TO NEW RELEASES | STARTING IN
      </div>

      <div className="countdown-grid">
        {/* 1. BASKETBALL */}
        <div className="countdown-card game-bg-1">
          {renderOdometerDigit(days, nextDays, daysFrac)}
          <span className="unit-tag">D</span>
        </div>

        {/* 2. FOOTBALL */}
        <div className="countdown-card game-bg-2">
          {renderOdometerDigit(hours, nextHours, hoursFrac)}
          <span className="unit-tag">H</span>
        </div>

        {/* 3. HOCKEY */}
        <div className="countdown-card game-bg-3">
          {renderOdometerDigit(minutes, nextMinutes, minsFrac)}
          <span className="unit-tag">Min</span>
        </div>

        {/* 4. BOXING */}
        <div className="countdown-card game-bg-4">
          {renderOdometerDigit(seconds, nextSeconds, secsFrac)}
          <span className="unit-tag">s</span>
        </div>
      </div>
    </div>
  );
};

export default FootballCountdown;