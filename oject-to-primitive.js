const obj = {
    name: "Name",
    age: 25,
    isAdmin: false,
    id: 203201
}

// Symbol.toPrimitive
// если существует Symbol.toPrimitive, то он используется для всех хинтов
obj[Symbol.toPrimitive] = function (hint) {
    console.log(`hint: ${hint}`)
    return hint === 'string' ? this.name : this.id
}

console.log(obj)
console.log(+obj) // 203201
console.log(String(obj)) // Name
