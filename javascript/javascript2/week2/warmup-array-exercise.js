//1.1. Doubling of number
let numbers = [1, 2, 3, 4];

// Using chaining
let newNumbers = numbers //Don't use semicolon here
.filter(numbers=> numbers% 2 !== 0)
.map(numbers => numbers*2)
console.log (newNumbers)

// Without Arrow function and chaining
const oddNumbers = numbers.filter((element)=>{
    return (element% 2 !== 0)
})
console.log(oddNumbers);

const doubledOddNumbers = oddNumbers.map((element)=>{
    return (element*2)
})
console.log (doubledOddNumbers)
