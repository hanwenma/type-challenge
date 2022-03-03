/**
 * JavaScript ——> TypeScript 转换：
 * 关键点：
 *  - 通过 ... 扩展运算符将原有数组和传入元素组成新的数组进行返回
*/

type Push<T extends any[], U> = [...T, U]