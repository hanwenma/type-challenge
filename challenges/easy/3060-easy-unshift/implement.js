/**
 * ts Unshift —— JavaScript 实现
 * 
 * Unshift<[], 1>
 * 
 * 关键点：
 *  - 通过 ... 扩展运算符将原有数组和传入元素组成新的数组进行返回
 * */

function myUnshift(arr, item) {
  return [item, ...arr]
}