type NumberToArray<N extends number, C extends number[] = []> =
  C['length'] extends N
  ? C
  : NumberToArray<N, [...C, 0]>

type A<X extends number, Y extends number> = [...NumberToArray<X>, ...NumberToArray<Y>]['length'];

type Fibonacci<T extends number, C extends number = 2, P extends number = 0, S extends number = 1> =
  T extends 1 | 2
  ? 1
  : T extends C
  ? A<P, S>
  : Fibonacci<T, A<C, 1> & number, S, A<P, S> & number>