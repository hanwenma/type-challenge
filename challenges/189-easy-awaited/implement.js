/**
 * ts MyAwaited —— JavaScript 实现
 * 
 * type MyAwaited = any
 * 
 * 关键点：
 *  - 判断传入的是否为 promise 类型
 *  - 获取 promise 中接收参数的类型
 *    - 若结果不是 promise 类型，则直接获取其类型
 *    - 若结果是 promise 类型，则递归调用 myAwaited
 * */

function myAwaited(promiseWrap) {
  if(!(promiseWrap instanceof Promise)) throw TypeError('类型错误！')
  let result = ''
  promiseWrap.then(res => {
    if (res instanceof Promise) myAwaited(res)
    result = Object.prototype.toString.call(res)
  })
  return () => setTimeout(() => console.log(result), 0);
}