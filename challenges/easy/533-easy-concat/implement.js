/**
 * ts Concat —— JavaScript 实现
 * 
 * Concat<[], []>
 * 
 * 关键点：
 *  - 将传入的两个数组展开，并放到一个新数组中
 * */

function myConcat(arr1, arr2) {
  return [...arr1, ...arr2]
}