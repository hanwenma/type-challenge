/**
 * 关键点：
*/

type MyReturnType<T extends (...P: any[]) => any> = T extends (...P: any[]) => infer R ? R : never;