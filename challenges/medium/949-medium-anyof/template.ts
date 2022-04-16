
type AnyOfFalse = 0 | '' | false | [] | { [key: string]: never };

type AnyOf<T extends any[]> = T[number] extends AnyOfFalse ? false : true;