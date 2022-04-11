

type Replace<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer V1}${From}${infer V2}`
    ? `${V1}${To}${V2}`
    : S