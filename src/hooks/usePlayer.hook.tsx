import { useContext } from "react";
import { PlayerContext } from "~/contexts/player.context";

const usePlayer = () => {
  const context = useContext(PlayerContext);

  if(!context) {
    throw Error("usePlayer musi znajdować się wewnątrz PlayerProvider");
  }

  return context;
}

export default usePlayer;
