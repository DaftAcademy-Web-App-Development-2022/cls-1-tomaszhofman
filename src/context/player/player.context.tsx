import React, { createContext, useMemo, useReducer, useRef } from "react";
import { playerReducer } from "~/context/player/reducers/playerReducer";
import { Actions, Meta, State } from "~/context/player/types";

export const PlayerContext = createContext<{
  state: State;
  actions: Actions;
} | null>(null);

export const initialPlayerState: State = {
  playing: false,
  currentTime: 0,
  progress: 0,
  duration: 0,
};

const PlayerProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(playerReducer, initialPlayerState);
  const playerRef = useRef<HTMLAudioElement>(null);

  const actions = useMemo(
    () => ({
      play(meta?: Meta) {
        if (playerRef.current) {
          dispatch({ type: "play" });

          if (state.playing) {
            dispatch({ type: "pause" });
            playerRef.current?.pause();
          }

          if (meta) {
            dispatch({ type: "setMeta", payload: meta });

            if (meta.src && playerRef.current.currentSrc !== meta.src) {
              playerRef.current.src = meta.src;
              playerRef.current.load();
              playerRef.current.pause();
              playerRef.current.currentTime = 0;
            }
          }

          playerRef.current.play();
        }
      },
      pause: () => {
        if (playerRef.current) {
          dispatch({ type: "pause" });
          playerRef.current?.pause();
        }
      },
      seek: (time: number) => {
        if (playerRef.current) {
          playerRef.current.currentTime = time;
        }
      },
    }),
    []
  );

  const handlers = useMemo(
    () => ({
      onTimeUpdate: () => {
        if (playerRef.current) {
          dispatch({
            type: "setCurrentTime",
            payload: Math.floor(playerRef.current.currentTime),
          });

          dispatch({
            type: "setProgress",
            payload: playerRef.current.currentTime / playerRef.current.duration,
          });
        }
      },
      onDurationChange: () => {
        if (playerRef.current) {
          dispatch({
            type: "setDuration",
            payload: Math.floor(playerRef.current.duration),
          });
        }
      },
    }),
    []
  );

  const value = React.useMemo(() => ({ state, actions }), [state, actions]);

  return (
    <>
      <PlayerContext.Provider value={value} {...props} />

      <audio
        ref={playerRef}
        onTimeUpdate={handlers.onTimeUpdate}
        onDurationChange={handlers.onDurationChange}
      />
    </>
  );
};

export default PlayerProvider;
