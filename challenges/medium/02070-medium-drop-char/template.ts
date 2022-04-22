
type DropChar<S, C> =
  S extends `${infer F}${infer Rest}`
  ? F extends C
    ? DropChar<Rest, C>
    : `${F}${DropChar<Rest, C>}`
  : S 
