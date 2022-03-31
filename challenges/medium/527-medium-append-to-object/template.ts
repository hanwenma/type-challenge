/**
 * 关键点：
*/


type AppendToObject<T extends object, U extends string, V extends unknown> = {
  [K in keyof T|U]: K extends keyof T ? T[K] : V
}