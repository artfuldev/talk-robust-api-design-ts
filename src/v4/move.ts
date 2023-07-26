import { Game } from "./game";

export type Move = {
  make: () => Game;
}
