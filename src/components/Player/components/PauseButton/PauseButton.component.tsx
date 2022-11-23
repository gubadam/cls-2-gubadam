import React from "react";

import styles from "./PauseButton.module.css";
import { PauseIcon } from "@heroicons/react/20/solid";

interface Props {
  pause: () => void;
}

const PauseButton = ({ pause }: Props) => (
  <button className={styles.pauseButton} onClick={() => pause()}>
    <PauseIcon className={styles.pauseIcon} aria-hidden="true" />
  </button>
);

export default PauseButton;
