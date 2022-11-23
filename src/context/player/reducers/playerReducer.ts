import { Action, State } from "~/context/player/types";
import { initialPlayerState } from "~/context/player/player.context";

export const playerReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setMeta": {
      return { ...state, meta: action.payload };
    }
    case "play": {
      return { ...state, playing: true };
    }
    case "pause": {
      return { ...state, playing: false };
    }
    case "setDuration": {
      return { ...state, duration: action.payload };
    }
    case "setCurrentTime": {
      return { ...state, currentTime: action.payload };
    }
    case "setProgress": {
      return { ...state, progress: action.payload };
    }

    default:
      return initialPlayerState;
  }
};
