/**
 * JavaScript ——> TypeScript 转换：
 *  - 判断传入的是否为 promise 类型 ——> 通过 extends 进行约束输入类型为 promise
 *  - 获取 promise 中接收参数的类型
 *    - 不是 promise 类型，则直接获取其类型 ——> 通过 infer 推断当前promise中参数类型
 *    - 是 promise 类型，则递归调用 myAwaited ——> 递归调用 MyAwaited
*/


// type MyAwaited<T extends Promise<any>> = T
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
  ? MyAwaited<P>
  : P
  : never;