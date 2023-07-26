import { Player } from "../core/player";
import { Position } from "../core/position";
import { Other } from "./player";
import { And } from "./test";
import { Append, Cast, IsArrayOfType, Without, WithoutAny } from "./tuple";

type Played<G extends Game<any, any>> = G extends Game<any, infer A> ? A : [];
type Positions = [
  Position.TopLeft,
  Position.TopCenter,
  Position.TopLeft,
  Position.MidLeft,
  Position.MidCenter,
  Position.MidRight,
  Position.BottomLeft,
  Position.BottomCenter,
  Position.BottomRight
];
type Available<G extends Game<any, any>> = WithoutAny<Positions, Played<G>>[number];
type Game<C extends Player, A extends Position[]> = {
  readonly player: C;
  readonly moves: A;
  readonly play: <P extends WithoutAny<Positions, A>[number]>(position: P) => Game<Other<C>, Append<A, P>>;
};

type New = Game<
  Player.X,
  []
>;
type MoveResult<
  G extends Game<any, any>,
  P extends Available<G>[number]
> = G extends Game<infer C, infer A>
  ? Game<Other<C>, Append<A, P>>
  : never;
type XMR = MoveResult<New, Position.MidRight>;
type OTR = MoveResult<MoveResult<New, Position.MidRight>, Position.TopRight>;

type Moves<G extends Game<any, any>> = G extends Game<infer C, infer A>
  ? { [K in WithoutAny<Positions, A>[number]]: () => MoveResult<G, K> }
  : [];

type XTR = MoveResult<New, Position.TopRight>;
type _ = Moves<XTR>;
type OML = MoveResult<XTR, Position.MidLeft>;
type XMC = MoveResult<OML, Position.MidCenter>;
type OMR = MoveResult<XMC, Position.MidRight>;
type XTC = MoveResult<OMR, Position.TopCenter>;
type OBL = MoveResult<XTC, Position.BottomLeft>;
type XTL = MoveResult<OBL, Position.TopLeft>;
type ____ = Moves<XTL>;
type __ = Moves<Game<Player.X, [Position.TopRight]>>;
