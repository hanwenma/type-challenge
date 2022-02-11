/**
 * JavaScript ——> TypeScript 转换：
 *  - 循环遍历 keys 得到单个 key ——> TS 使用 in 进行遍历
 *  - 判断遍历的 key 是否存在于 todo 中 ——> TS 使用 extends 进行约束
 *  - 存储 todo[key] 到新的 obj 中，并返回 —— TS 使用 ：赋值
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}