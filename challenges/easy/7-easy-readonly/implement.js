/**
 * Readonly —— JavaScript 实现
 * 
 * Readonly<Todo>
 * 
 * 关键点：
 *  - 循环遍历 keys 得到单个 key
 *  - 通过遍历为每个 key 设置 Descriptor，只设置 getter
 *  - 返回 todo
 * */

// javacrpit
function myReadonly(todo) {
  Object.keys(todo).forEach(key => {
    const value = todo[key]
    Object.defineProperty(todo, key, {
      get() {
        return value
      }
    })
  })
  return todo
}