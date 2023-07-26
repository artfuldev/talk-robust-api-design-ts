import { Pass, check, checks } from "./test";

export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
export type Tail<T extends any[]> = T extends [any, ...infer U] ? U : never;
export type HasElement<T extends any[], E> = E extends T[number] ? true : false;
export type Concat<A extends any[], B extends any[]> = [...A, ...B];
export type Prepend<E, A extends any[]> = Concat<[E], A>;
export type Append<A extends any[], E> = Concat<A, [E]>;
export type Without<T extends any[], E> = T extends []
  ? T
  : Head<T> extends E
  ? Without<Tail<T>, E>
  : Prepend<Head<T>, Without<Tail<T>, E>>;
export type WithoutAny<T extends any[], E extends any[]> = T extends []
  ? T
  : HasElement<E, Head<T>> extends true
  ? WithoutAny<Tail<T>, E>
  : Prepend<Head<T>, WithoutAny<Tail<T>, E>>;
export type Any<T extends any[]> = T extends any ? T : never;
export type IsArrayOfType<A extends any[], T> = A extends T[] ? true : false;
export type Cast<A extends any[], B> = A extends B[] ? B[] : never;

checks([
  check<Without<[1, 2, 3], 2>, [1, 3], Pass>(),
  check<WithoutAny<[1, 2, 3], [1, 3]>, [2], Pass>(),
]);
