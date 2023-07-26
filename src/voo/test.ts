export type Pass = 1;
export type Fail = 0;
export type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2
  ? Pass
  : Fail) extends <A>() => A extends A1 ? Pass : Fail
  ? Pass
  : Fail;
export type Boolean = Pass | Fail;
export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;

export declare function check<Type, Expect, Outcome extends Boolean>(
  debug?: Type
): Equals<Equals<Type, Expect>, Outcome>;
export declare function checks(checks: 1[]): void;
