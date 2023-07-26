import { Player } from "../core/player";
import { Pass, check, checks } from "./test";

export type Other<P extends Player> = P extends Player.X ? Player.O : Player.X;

export const other = <P extends Player>(player: P): Other<P> =>
  player === Player.X ? (Player.O as Other<P>) : (Player.X as Other<P>);

checks([
  check<Other<Player.X>, Player.O, Pass>(),
  check<Other<Player.O>, Player.X, Pass>(),
]);
