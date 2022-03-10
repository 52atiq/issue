const numbers =[2,3,5,7];
const returnValue = num =>{
    numbers.map(num *num);
}
const returnValue1 =numbers.map((num => num *num))
console.log(numbers)
console.log(returnValue)
console.log(returnValue1)