import { Player } from "../core/player";
import { Position } from "../core/position";
import { Move } from "./move";

export type Game = {
  current: () => Player;
  move: (position: Position) => Move | null;
  player: (position: Position) => Player | null;
};
