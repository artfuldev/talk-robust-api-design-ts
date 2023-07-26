import { Player } from "../core/player";
import { Position } from "../core/position";

export type Game = {
  current: () => Player;
  play: (player: Player, position: Position) => Game;
  player: (position: Position) => Player | null;
};
