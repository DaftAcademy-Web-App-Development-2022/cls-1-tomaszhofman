import React from "react";

import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";
import usePlayer from "~/hooks/usePlayer";
import { PlayerButton } from "~/components/Player/PlayerButton.component";
import { ProgressBar } from "~/components/Player/ProgressBar.component";
import { ProgressCounter } from "~/components/Player/ProgressCounter.components";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

const Player = () => {
  const { state, actions } = usePlayer();

  const handlePlayAudio = () =>
    actions.play({
      id: trackData.id,
      name: trackData.name,
      src: trackData.preview_url,
      artists: trackData.artists.map((artist) => artist.name),
    });

  const handlePauseAudio = () => actions.pause();

  return (
    <div className={styles.root}>
      {state.playing ? (
        <PlayerButton onButtonClick={handlePauseAudio}>
          <PauseIcon className="h-6 w-6 text-amber-50" />
        </PlayerButton>
      ) : (
        <PlayerButton onButtonClick={handlePlayAudio}>
          <PlayIcon className="h-6 w-6 text-amber-50" />
        </PlayerButton>
      )}
      <ProgressBar progress={state.progress} />
      {state.currentTime}/{state.duration}
      <ProgressCounter />
    </div>
  );
};

export default Player;
