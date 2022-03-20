/**
 * 关键点：
*/

type TrimLeft<S extends string> = S extends `${' '|'\n'|'\t'}${infer V}` ? TrimLeft<V> : S