/**
 * ts Includes —— JavaScript 实现
 * 
 * Includes<[1, 2, 3, 5, 6, 7], 7>
 * 
 * 关键点：
 *  - 通过循环判断传入 item 是否全等于 arr 中的某一项 
 * */

function myIncludes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if(item === arr[i]) return true;
  }
  return false;
}