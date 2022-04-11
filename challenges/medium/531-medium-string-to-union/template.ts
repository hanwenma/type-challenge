


type StringToUnion<T extends string> =
  T extends ''
  ? never
  : T extends `${infer K}${infer V}`
    ? K | StringToUnion<V>
    : T
