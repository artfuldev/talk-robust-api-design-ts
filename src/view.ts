import { Position } from "./core/position";
import { Game } from "./v0/game";

const string = (game: Game): string => ({}) as any;
const print = (game: Game) => { console.log(string(game)); };

const game: Game = {} as any;
print(game);
const player = game.current();
const position = Position.TopLeft;
game.play(player, position);
print(game);
