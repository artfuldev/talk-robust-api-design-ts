import { Undoable } from "./undoable";

export type Move = {
  make: () => Undoable;
}
