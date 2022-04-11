

type Chainable<T extends {[key:string]: unknown} = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<T & {[k in K]: V}>
  get(): T
}