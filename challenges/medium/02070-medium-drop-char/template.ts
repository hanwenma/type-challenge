
type DeleteChar<S extends string, C extends string> = S extends C ? '' : S

type DropChar<S extends string, C extends string> =
  S extends `${infer First}${infer Rest}`
  ? `${DeleteChar<First, C>}${DropChar<Rest, C>}`
  : S
