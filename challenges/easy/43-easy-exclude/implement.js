/**
 * ts MyExclude —— JavaScript 实现
 * 
 * type MyExclude<T, U> = any
 * 
 * 关键点：
 *  - 通过 Array.include 判断当前元素是否存在于 excludeArr 中
 *  - 通过 Array.filter 将对应元素进行过滤
 * */

function MyExclude(originArr, excludeArr) {
  if(!Array.isArray(excludeArr)) excludeArr = [excludeArr]
  return originArr.filter(item => !excludeArr.include(item))
}