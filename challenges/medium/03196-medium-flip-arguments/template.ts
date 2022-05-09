
type ReverseArgs<Args extends any[]> = Args extends [infer F, ...infer R]
  ? [...ReverseArgs<R>, F] : [];

type FlipArguments<T extends Function> =
  T extends (...args: [...infer Args]) => infer R
  ? (...args: ReverseArgs<Args>) => R
  : T;