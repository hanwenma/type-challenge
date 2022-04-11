
type Diff<O, O1> = {
    [K in keyof (Omit<O, keyof O1> & Omit<O1, keyof O>)]:
    K extends keyof O
    ? O[K]
    : K extends keyof O1
        ? O1[K]
        : never
}