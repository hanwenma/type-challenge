/**
 * 关键点：
*/

type CamelCase<S extends string> =
    S extends `${infer F}-${infer R}`
    ? (R extends Capitalize<R>
        ? `${F}-${CamelCase<R>}`
        : `${F}${CamelCase<Capitalize<R>>}`)
    : S