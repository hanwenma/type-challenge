
type EndsWith<T extends string, U extends string> =
  T extends U
  ? true
  : T extends `${infer L}${infer R}`
  ? R extends U ? true : EndsWith<R, U>
  : false