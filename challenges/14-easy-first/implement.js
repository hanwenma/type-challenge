/**
 * ts First —— JavaScript 实现
 * 
 * Expect<Equal<First<[]>, never>>
 * 
 * 关键点：
 *  - 数组为空时，返回 never
 *  - 直接返回传入数组的第一项
 * */

function myFirst(todo) {
  // 方案一
  // return todo.length === 0 ? 'never' : todo[0] 

  // 方案二
  const [first, ...res] = todo
  return todo ? todo[0] : 'never'
}