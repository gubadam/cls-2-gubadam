import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";
import PlayButton from "./components/PlayButton/PlayButton.component";
import PauseButton from "./components/PauseButton/PauseButton.component";
import ProgressBar from "./components/ProgressBar/ProgressBar.component";
import TimeDisplay from './components/TimeDisplay/TimeDisplay.component';
import VolumeButton from './components/VolumeButton/VolumeButton.component';

const Player = () => {
  const { state, actions } = usePlayer()

  return (
    <div className={styles.root}>
       <div className={styles.player}>
        {state.playing ? (
          <PauseButton pause={() => actions.pause()}/>
        ) : (
          <PlayButton play={() => actions.play({
            id: trackData.id,
            name: trackData.name,
            src: trackData.preview_url,
            artists: trackData.artists.map(artist => artist.name)
           })} />
        )}

         <p>{state.meta?.name ?? "Tytuł"}</p>
         <ProgressBar progress={state.progress}/>
         <p>{state.meta?.artists ?? "Artysta"}</p>

         <TimeDisplay currentTime={state.currentTime} duration={state.duration}/>
         <VolumeButton muted={state.volume === 0} onClick={() => actions.mute(state.volume === 0 ? 1 : 0)} />
       </div>
    </div>
  );
};

export default Player;
