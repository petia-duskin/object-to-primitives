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

const objj = {a: 1, b: 2}


// возможность перебирать объект
let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        }
    }
}


for (let val of range) {
    // console.log(val)
}


// пример итерируемого массива

let iteratedArray = {
    from: 0,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;

        // используем стрелочную функцию чтобы наследовать контекст
        return {
            next: () => {
                if (this.current <= this.to) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true}
                }
            }
        }
    }
}

// явный вызор интератора

let helloWorld = "Hello world"

let stringIterator = helloWorld[Symbol.iterator]()

while (true) {
    let result = stringIterator.next();
    if (result.done) {
        break;
    }

    console.log(result.value)
}

console.log("iteratedArray")
for (let val of iteratedArray) {
    console.log(val)
}

// пример псевдомассива
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
}

// Array.from делает из интерируемого или псевдомассива, настоящий массив

let newArr = Array.from(arrayLike)
console.log(newArr)

