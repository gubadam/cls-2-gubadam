import React from "react";

import { PlayIcon } from "@heroicons/react/20/solid";

import styles from "./PlayButton.module.css";

interface Props {
  play: () => void;
}

const PlayButton = ({ play }: Props) => (
  <button onClick={() => play()} className={styles.playButton}>
    <PlayIcon className={styles.playIcon} aria-hidden="true" />
  </button>
);

export default PlayButton;