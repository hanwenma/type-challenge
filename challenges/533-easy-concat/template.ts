/**
 * JavaScript ——> TypeScript 转换：
 * 关键点：
 *  - 将传入的两个数组展开，并放到一个新数组中 ——> ts 中同样支持 ... 扩展运算符
*/

type Concat<T extends any[], U extends any[]> = [...T, ...U]