import { Player } from "../core/player";
import { Position } from "../core/position";
import { Other } from "./player";
import { And } from "./test";
import { Cast, IsArrayOfType, Without } from "./tuple";

type Game<C extends Player, A extends Position[]> = {
  readonly player: C;
  readonly moves: A;
};
type Available<G extends Game<any, any>> = G extends Game<any, infer A> ? A : [];

type New = Game<
  Player.X,
  [
    Position.TopLeft,
    Position.TopCenter,
    Position.TopRight,
    Position.MidLeft,
    Position.MidCenter,
    Position.MidRight,
    Position.BottomLeft,
    Position.BottomCenter,
    Position.BottomRight
  ]
>;
type MoveResult<
  G extends Game<any, any>,
  P extends Available<G>[number]
> = G extends Game<infer C, infer A>
    ? Game<Other<C>, Without<Available<G>, P>>
    : never;
type XMR = MoveResult<New, Position.MidRight>;
type OTR = MoveResult<XMR, Position.TopRight>;

type Moves<G extends Game<any, any>> = G extends Game<infer C, infer A> ? { [K in A[number]]: () => MoveResult<G, K> } : [];

type XTR = MoveResult<New, Position.TopRight>;
type _ = Moves<XTR>;
type OML = MoveResult<XTR, Position.MidLeft>;
type XMC = MoveResult<OML, Position.MidCenter>;
type OMR = MoveResult<XMC, Position.MidRight>;
type XTC = MoveResult<OMR, Position.TopCenter>;
type OBL = MoveResult<XTC, Position.BottomLeft>;
type XTL = MoveResult<OBL, Position.TopLeft>;
type __ = Moves<Game<Player.X, [Position.TopRight]>>;
