/**
 * 关键点：
 *  - 循环遍历数组得到每个元素 item ——> ts 中通过 x in T[number] 遍历数组
 *  - 将每个 item 设置为新对象的 key/value ——> ts 中通过 ：赋值
 *  - 限制新对象的 key 为 string、number、symbol ——> ts 中通过 | 联合类型进行约束
 *  - 返回新对象
*/

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}