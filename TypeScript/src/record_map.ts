type UsersAge = {
    [key: string]: number
}

// instead of using the ugly syntax above we can directly consolidate things using Record API
type Age = Record<string, {age: number, name: string}>;

const users: Age = {
    'ras@qd1': { age: 22, name: 'Sahil' },
    'xyz@p34' : { age: 20, name: 'Sakshi ' },
}