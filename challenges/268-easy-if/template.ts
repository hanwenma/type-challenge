/**
 * JavaScript ——> TypeScript 转换：
 * 关键点：
 *  - 判断 condition 是否为 boolean 类型 ——> ts 中通过 extends 限定类型和具体值
 *  - 是 boolean 类型，true 返回 value1，false 返回 value2 ——> ts 中也可用三运表达式
*/

type If<C extends boolean, T, F> = C extends true ? T : F