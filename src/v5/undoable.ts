import { Game } from "./game";

export type Undoable = Game & {
  undo: () => Game;
};
