

// 方式一
// type MyOmit<T, K> = {
//   [Key in keyof T as Key extends K ? never : Key]: T[Key]
// }

// 方式二
type MyOmit<T, K> = {
  [Key in MyExclude<keyof T, K>]: T[Key]
}