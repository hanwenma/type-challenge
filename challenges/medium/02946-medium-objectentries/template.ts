
type ReomveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;

type ObjectEntries<T, U extends keyof T = keyof T> = U extends any ? [U, ReomveUndefined<T[U]>] : never;