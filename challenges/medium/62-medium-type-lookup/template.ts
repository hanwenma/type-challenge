

// 方式一
type LookUp<U, T> = U extends { type: T } ? U : never

// 方式二
// type LookUp<U, T extends string> = U extends { type: infer V } ? T extends V ? U : never : never