/**
 * ts Push —— JavaScript 实现
 * 
 * Push<[], 1>
 * 
 * 关键点：
 *  - 通过 ... 扩展运算符将原有数组和传入元素组成新的数组进行返回
 * */

function myPush(arr, item) {
  return [...arr, item]
}