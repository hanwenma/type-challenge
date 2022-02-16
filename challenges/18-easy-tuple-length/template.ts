/**
 * JavaScript ——> TypeScript 转换：
 *  - 判断 arr 是否是数组 ——> ts 通过 extents 来进行约束
 *  - 数组就返回 arr.length，非数组抛出异常 ——> ts 中返回通过 T['length'] 返回数组长度
*/

type Length<T extends readonly any[]> = T['length']