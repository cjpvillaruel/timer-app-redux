import React  from 'react';
import store from '../store';

const dispatchSessionAction = e => {
  const { session } = e.target.dataset;
  store.dispatch({ type: 'SET_ACTIVE_SESSION', session });
};
const Timer = (props) => {
  const {days, hours, minutes, seconds, activeSession} = props;
  return (
    <div className="timer">
      <p>ACTIVE SESSION: {activeSession}</p>
      <div className="days" onClick={dispatchSessionAction} data-session="days">{days} DAYS</div>
      <div className="hours" onClick={dispatchSessionAction} data-session="hours">{hours} HOURS</div>
      <div className="minutes" onClick={dispatchSessionAction} data-session="minutes">{minutes} MINUTES</div>
      <div className="seconds" onClick={dispatchSessionAction} data-session="seconds">{seconds} SECONDS</div>
    </div>
  )
} 

export default Timer;