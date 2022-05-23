// your answers
type NumToArray<T extends number, R extends any[] = []> = T extends R['length']
  ? R
  : NumToArray<T, [...R, any]>

type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : NumToArray<T> extends [...NumToArray<U> extends [...infer R] ? R : never, ...any]
  ? true
  : false