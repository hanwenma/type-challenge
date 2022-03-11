/**
 * 关键点：
*/

type Last<T extends any[]> = T extends [...infer A, infer B] ? B : never