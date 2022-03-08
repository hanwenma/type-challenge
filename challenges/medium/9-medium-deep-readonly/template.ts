/**
 * 关键点：
*/

// 方式一
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends object 
//   ? T[K] extends Function ? T[K] : DeepReadonly<T[K]>
//   : T[K]
// }

// 方式二
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]>: T[K]
// }

// 方式三
type O = {
  [key: string]: unknown
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends O ? DeepReadonly<T[K]>: T[K]
}