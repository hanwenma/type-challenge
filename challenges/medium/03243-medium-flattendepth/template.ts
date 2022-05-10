

type FlattenDepth<T extends any[], Num = 1, Save extends any[] = []>
  = Save["length"] extends Num
  ? T
  : T extends [infer F, ... infer R]
  ? F extends any[]
  ? [...FlattenDepth<F, Num, [1, ...Save]>, ...FlattenDepth<R, Num, Save>]
  : [F, ...FlattenDepth<R, Num, Save>]
  : []