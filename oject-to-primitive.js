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


// Если нету Symbol.toPrimitive, то js пытается найти методы toString и valueOf
let obj2 = {
    name: "Name",
    age: 25
}

console.log(String(obj2)) // [object Object]
console.log(obj2.valueOf()) // { name: 'Name', age: 25 }

obj2.toString = function () {
    return this.name;
}

obj2.valueOf = function () {
    return this.age;
}

console.log(String(obj2)) // Name
console.log(Number(obj2)) // 25
