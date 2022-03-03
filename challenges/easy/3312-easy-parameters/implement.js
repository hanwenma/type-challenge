/**
 * ts Parameters —— JavaScript 实现
 * 
 * MyParameters<typeof foo>
 * 
 * 关键点：
 *  - 通过 ... 剩余运算符将传入的参数组成数组并返回
 * */

function myParameters(...arr) {
  return arr;
}