/**
 * JavaScript ——> TypeScript 转换：
 *  - 数组为空时，返回 never ——> ts 中判断数组或元组是否为空的方法：
 *                    - 1.使用 extent 关键字限制，如：T extends []
 *                    - 2.使用 extent 关键字限制，如：T['length'] extends 0
 *                    - 3.使用 extent + T[number] 关键字限制，可见测试 1
 *                    - 4.使用 extent + infer 推断关键字，可见测试 2
 *  - 直接返回传入数组的第一项 ——> ts 中取出数组或元组第一项时，直接通过 T[0] 获取
*/

// 测试 1
// type Arr = [] 
// type Type1 = arr[number] // Type1 === never

// 测试 2
// type Arr = []
// type Type1 = Arr extends [infer First, ... infer Res] ? First : never

// 方案一：
// type First<T extends any[]> = T extends [] ? never : T[0]

// 方案二：
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 方案三：
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 方案四：
type First<T extends any[]> = T extends [infer First, ... infer Res] ? First : never