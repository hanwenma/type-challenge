// your answers
type CharArr<S> = S extends `${infer R}${infer L}` ? [R, ...CharArr<L>] : [S];

type MakeStr<T extends string, S extends string> = S extends never ? never : T extends CharArr<S>[number] ? T : `${T}${S}`;

type Combine<T extends string, S extends string, Times extends any[]> =
  Times extends { length: 0 } ? S :
  Times extends [...infer L, any] ?
  Combine<T, MakeStr<T, S>, L> : S;

type AllCombinations<S extends string> = Combine<CharArr<S>[number] | '', CharArr<S>[number], CharArr<S>>; 