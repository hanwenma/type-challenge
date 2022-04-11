

type AppendArgument<Fn extends Function, A extends unknown> = 
Fn extends (...args:infer T)=> infer R 
? (...args:[...T, A])=> R 
: Fn