
// 方式一
// type ReplaceKeys<U, T, Y> =
//   U extends any
//   ? {
//     [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K];
//   }
//   : never;

// 方式二
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]:
  K extends T
  ? K extends keyof Y
  ? Y[K]
  : never
  : U[K]
}