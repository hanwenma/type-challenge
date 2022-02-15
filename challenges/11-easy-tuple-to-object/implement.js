/**
 * TupleToObject —— JavaScript 实现
 * 
 * TupleToObject<typeof tuple>
 * 
 * 关键点：
 *  - 循环遍历数组得到每个元素 item
 *  - 将每个 item 设置为新对象的 key/value
 *  - 限制新对象的 key 为 string、number、symbol
 *  - 返回新对象
 * */

// javacrpit
function tupleToObject(tuple) {
  const rs = {}
  tuple.forEach(item => {
    rs[item] = item
  })
  return rs
}