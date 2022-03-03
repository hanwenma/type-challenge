/**
 * ts Length —— JavaScript 实现
 * 
 * Length<T extends readonly any[]>
 * 
 * 关键点：
 *  - 判断 arr 是否是数组
 *  - 是数组就返回 arr.length，不是数组抛出异常
 * */

function myLength(arr) {
  if (!Array.isArray(arr)) throw TypeError('')
  return arr.length
}