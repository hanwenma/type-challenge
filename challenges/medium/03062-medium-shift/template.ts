
type Shift<T extends Array<any>> = T extends [infer F, ...infer R] ? R : never