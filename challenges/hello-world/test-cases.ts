import { Equal, Expect } from '@type-challenges/utils'

// expected HelloWorld to be string
type test = Expect<Equal<HelloWorld, string>>