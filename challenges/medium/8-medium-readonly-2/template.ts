/**
 * 关键点：
*/

// 方式一
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P];
// } & MyOmit<T, K>

// 方式二
type MyReadonly2<T, K extends keyof T = keyof T> = { [P in MyExclude<keyof T, K>]: T[P] } &  { readonly [P in K]: T[P] }
