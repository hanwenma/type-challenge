

type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}`
  ? Trim<L>
  : S extends `${infer R}${' ' | '\n' | '\t'}`
     ? Trim<R>
      : S;