
type RequiredByKeys<T, K = keyof T> = MergeType<
  Required<{
    [P in keyof T as P extends K ? P : never]: T[P]
  }> & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }>