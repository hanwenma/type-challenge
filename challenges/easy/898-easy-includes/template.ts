/**
 * JavaScript ——> TypeScript 转换：
 * 关键点：
 *  - 通过循环判断传入 item 是否全等于 arr 中的某一项
 * 
 *  - ts 实现
 *     - 通过 infer 推断出符合 T 的元组内容
 *     - 接着比较元组第一项 K 和传入的 U 是否全等，若相等直接输出结果
 *     - 若不相等则开始递归调用 Includes 判断 U 是否存在于剩余类型元组 P 中
 *     - 递归直到遍历完传入的元组 T 中的每一项
*/
import { Equal } from "@type-challenges/utils";

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer P]
  ? Equal<K, U> extends true ? true : Includes<P, U> : false