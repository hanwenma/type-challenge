/**
 * 关键点：
*/

type Absolute<T extends number | string | bigint> =
  `${T}` extends `${'-'}${infer R}`
  ? Absolute<R>
  : `${T}`;