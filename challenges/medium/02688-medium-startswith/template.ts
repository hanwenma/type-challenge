

type StartsWith<T extends string, U extends string> =
  T extends `${infer L1}${infer R1}`
  ? U extends `${L1}${infer R2}`
  ? R2 extends ''
  ? true
  : StartsWith<R1, R2>
  : false
  : false