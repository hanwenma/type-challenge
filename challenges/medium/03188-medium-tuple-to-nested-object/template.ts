type TupleToNestedObject<T extends any[], U> =
  T extends [infer R, ...infer P]
  ? R extends string
  ? { [key in R]: TupleToNestedObject<P, U> }
  : never
  : U