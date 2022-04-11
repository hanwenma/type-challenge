

type Flatten<T extends unknown[]> =
  T extends [infer F, ...infer R]
  ? [...(F extends unknown[] ? Flatten<F> : [F]), ...Flatten<R>]
  : []