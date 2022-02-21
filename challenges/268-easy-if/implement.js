/**
 * ts If —— JavaScript 实现
 * 
 * If<false, 'a', 2>, 2>
 * 
 * 关键点：
 *  - 判断 condition 是否为 boolean 类型
 *  - 是 boolean 类型，true 返回 value1，false 返回 value2
 * */

function myIf(condition, value1, value2) {
  if(typeof condition !== 'boolean') throw TypeError('类型错误') 
  return condition ? value1 : value2
}