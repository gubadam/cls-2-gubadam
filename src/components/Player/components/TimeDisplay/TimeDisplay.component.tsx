import React from 'react';

import styles from "./TimeDisplay.module.css";

interface Props {
  currentTime: number;
  duration: number;
}

function formatTime(n: number) {
  const minutes = Math.floor(n % 3600 / 60).toString().padStart(2, '0');
  const seconds = Math.floor(n % 60).toString().padStart(2, '0');

  return minutes + ':' + seconds;
}

const TimeDisplay = ({ currentTime, duration }: Props) => {
  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);
  return (
    <div className={styles.timeDisplay}>
      <p>{formatCurrentTime} / {formatDuration}</p>
    </div>
  );
};

export default TimeDisplay;
