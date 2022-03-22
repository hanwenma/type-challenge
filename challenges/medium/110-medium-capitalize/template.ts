/**
 * 关键点：
*/

type MyCapitalize<S extends string> = S extends `${infer V1}${infer V2}`? `${Uppercase<V1>}${V2}` : S