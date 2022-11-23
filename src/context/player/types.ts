export type Meta = {
  id?: string;
  src?: string;
  name?: string;
  artists?: string[];
};

export type State = {
  meta?: Meta;
  playing: boolean;
  currentTime: number;
  progress: number;
  duration: number;
};

export type Actions = {
  play: (meta?: Meta) => void;
  pause: () => void;
  seek: (time: number) => void;
};

export type Action =
  | {
      type: "setMeta";
      payload: Meta;
    }
  | {
      type: "play";
    }
  | {
      type: "pause";
    }
  | {
      type: "setProgress";
      payload: number;
    }
  | {
      type: "setCurrentTime";
      payload: number;
    }
  | {
      type: "setDuration";
      payload: number;
    };
