/**
 * JavaScript ——> TypeScript 转换：
 *  - 通过 Array.include 判断当前元素是否存在于 excludeArr 中 ——> ts 中通过 extends 进行约束判断
 *  - 通过 Array.filter 将对应元素进行过滤 ——> 通过约束的返回条件决定返回内容
*/


type MyExclude<T, U> = T extends U ? never : T