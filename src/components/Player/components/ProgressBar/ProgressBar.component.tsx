import React from "react";

import styles from "./ProgressBar.module.css";

interface Props {
  progress: number;
  }

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={styles.containerWithProgressBar}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;