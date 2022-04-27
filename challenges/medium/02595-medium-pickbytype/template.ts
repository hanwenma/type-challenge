
type PickByType<T extends Object, U extends unknown> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}