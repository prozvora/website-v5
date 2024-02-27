import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import '../css/timer.css';

const CountdownTimer = props => {
  const {endDate, title} = props;
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="timer-interval">
        {`${timeLeft[interval]} ${interval}`}
      </span>,
    );
  });

  return (
    <div>
      <div className="timer-title">{title}</div>
      <div>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <div>The wait is over!</div>
        )}
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  title: PropTypes.string,
};

export default CountdownTimer;
