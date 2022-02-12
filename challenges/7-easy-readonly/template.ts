/**
 * 关键点：
 *  - 循环遍历 keys 得到单个 key  ——> ts 中通过 in 和 keyof 遍历对应类型
 *  - 通过遍历为每个 key 设置 Descriptor，设置 getter/setter ——> 通过 readonly 关键字实现
 *  - 返回 todo ——> ts 中通过 ：赋值即可
*/

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}