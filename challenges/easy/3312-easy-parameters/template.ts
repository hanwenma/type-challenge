/**
 * JavaScript ——> TypeScript 转换：
 * 关键点：
 *  - 通过 ... 剩余运算符将传入的参数组成数组并返回 ——> 
 *    ts 中通过 extends 和 infer 限制并推断出传入参数的类型并返回
*/

type MyParameters<T extends (...args: any[]) => any> = T extends (...arg: infer P) => any ? P : never;