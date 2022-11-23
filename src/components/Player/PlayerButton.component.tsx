import trackData from "~/data/trackData.json";
import React, { ReactElement, ReactNode } from "react";
import usePlayer from "~/hooks/usePlayer";
import { State } from "~/context/player/types";

type PlayerButtonProps = {
  onButtonClick: () => void;
  children: ReactNode;
};

export const PlayerButton = ({
  onButtonClick,
  children,
}: PlayerButtonProps) => {
  return <button onClick={onButtonClick}>{children}</button>;
};
