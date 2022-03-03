/**
 * ts Pick —— JavaScript 实现
 * 
 * type TodoPreview = Pick<Todo, "title" | "completed">;
 * 通过从类型中选取属性键集（字符串文本或字符串文本的并集）来构造类型
 * 
 * 关键点：
 *  - 循环遍历 keys 得到单个 key
 *  - 判断遍历的 key 是否存在于 todo 中
 *  - 存储 todo[key] 到新的 obj 中，并返回
 * */

function myPick(todo, keys) {
  const obj = {}

  keys.forEach(key => {
    if(key in todo){
      obj[key] = todo[key]
    }
  })

  return obj
}