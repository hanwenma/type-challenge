/**
 * 关键点：
*/

// 方式一
// type Pop<T extends any[]> = T extends [...infer rest, infer last] ? Exclude<rest, last> : never

// 方式二
type Pop<T extends any[]> = T extends [...infer rest, infer last] ? rest : never