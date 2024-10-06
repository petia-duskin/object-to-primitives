// splice

let arr = ["Hello", "world", "sun", "cat"]

// splice (start, deleteCount, itemsToInsert)
arr.splice(1, 1, "new")

console.log(arr) // [ 'Hello', 'new', 'sun', 'cat' ]

// slice - копирует элементы массива

let arrCopy = arr.slice()

// concat - создает новый массив, копируя входные элементы и массивы


let newArray = arr.concat(['1', '2', '3'], 5, 7, "hello world", [55555], {name: 'Hello world'})

console.log(newArray)
console.log(arr)

// forEach - позволяет запускать фукнцию для каждого элемента массива, результат функции, если она что-то возразащает отбрасывается

let numbers = [1, 2, 3, 4, 5, 6, 7]

numbers.forEach(number => {
    console.log(number)
})

// методы поиска элементов в массиве

console.log(numbers.indexOf(4))
console.log(numbers.includes(10))

let objects = [
    {id: 1, name: 'Ann', age: 25},
    {id: 2, name: 'Mary', age: 11},
    {id: 3, name: 'John', age: 5},
]

let result = objects.find(user => user.age > 10)
let resultIndex = objects.findIndex(user => user.age > 10)

console.log(result)
console.log(resultIndex)

// find - возвращает массив вхождений
let results = objects.filter(user => user.age > 10)
console.log(results)

// map - вызывает функцию для каждого элемента массива и возращает массив результатов выполнения этой функции

let bookNames = ['властелин колец', 'гарри поттер', 'пираты карибского моря', '', 'п', 'пр']

let bookNamesResult = bookNames.map(name => {
    if (!name.length !== 0) {
        let firstChar = name.charAt(0).toUpperCase()

        return firstChar + name.slice(1);
    }

    return name;
})

console.log(bookNamesResult)

// sort - сортирует массив на месте

let unsortedNumbers = [1, 5, 3, 11, 7, 10]

unsortedNumbers.sort((a, b) => a - b)

console.log(unsortedNumbers)

// reverse - меняет порядок элементов в arr на обратный, изменяет при этом сам массив

let reverseResult = numbers.reverse()
console.log(reverseResult);
console.log(numbers)

// split - разделяет строку по заданному разделителю

let names = "Вася, Петя, Маша"

let arrNames = names.split(', ')

for (let name of arrNames) {
    console.log(name)
}

let newString = arrNames.join(';')
console.log(newString)

// reduce - используется для вычисления единичного значения на основе всего массива

let data = [
    {
        id: 1,
        name: 'John',
        value: 1300,
        isAdmin: false
    },
    {
        id: 2,
        name: 'Anna',
        value: 555,
        isAdmin: false
    },
    {
        id: 3,
        name: 'Marry',
        value: 875,
        isAdmin: true
    },
]

let dataResult = data.reduce((prev, current) => {
    return {
        value: prev.value + current.value
    }
}, {value: 0})

console.log(dataResult)

// some - проверяет удовлетворяет ли какой-то элемент массивая заданному условию

let isValid = data.some(user => user.value > 500)
console.log(isValid)

// every - проверяет удовлетворяют ли все элементы массива заданному условию

let isEveryValid = data.every(user => user.value > 500)
console.log(isEveryValid)

// fill - заполняет массив повторяющимися значениями

let customArray = new Array(100)
customArray.fill(0, 0, 100)
console.log(customArray)