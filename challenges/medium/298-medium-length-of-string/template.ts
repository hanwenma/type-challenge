/**
 * 关键点：
*/

type LengthOfString<S extends string, R extends unknown[] = []> = 
S extends `${infer F}${infer Res}`
? LengthOfString<Res, [...R, F]>
: R['length']