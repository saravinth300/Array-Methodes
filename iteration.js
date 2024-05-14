// 1) forEach
// const number = ["one","two","three","four","five"];
// const value = number.forEach((number)=>{
//     console.log(number);
// });

// 1) forEach string using
// const number = ["one","two","three","four","five"];
// const value = number.forEach((number)=>{
//     console.log(number.toUpperCase());
// });

// 2)map call back function iteration
// const number = [1,2,3,4,5,6,];
// const value = number.map((ans)=>{
//     console.log(ans);
// });

// 2) map value change
// const number = [1,2,3,4,5,6,];
// const value = number.map((ans)=>{
//     return ans + 2;
// });
// console.log(value)

// 2) map normal function
// const number = [1,2,3,4,5,6,];
// const value = number.map(asn)
// function asn(x){
//     return x + 2;
// }
// console.log(value)


// 3)filter odd number
// const number = [1,2,3,4,5,6,7,8,];
// const value = number.filter((ans)=>{
//     return ans % 2

// })
// console.log(value)

// 3)filter even number 
// const number = [1,2,3,4,5,6,7,8,];
// const value = number.filter((ans)=>{
//     return ans % 2===0;

// })
// console.log(value)

// 4)reduce()  (previousvalue,currenvalue)
// const number = [1,2,3,4,6,7,8];
// const value = number.reduce((preva,currentva)=>{
//     return preva+currentva;
// })
// console.log(value);

// 5)reduceRight() right to value check 
// const number = [1,2,3,4,6,7,8];
// const value = number.reduceRight((preva,currentva)=>{
//     return preva+currentva;
// })
// console.log(value);

// 6)every() true or false all condition value pass = true

// const number = [10,20,35,36,45];
// const value = number.every((mark)=>{
//     return mark > 30;
// })
// console.log(value)

// // 7)some() true or fales 1 condition passs value =  true
// const number = [10,20,35,36,45];
// const value = number.some((mark)=>{
//     return mark > 30;
// })
// console.log(value)

// 8)from()
// const number = "aravinth"
// const value = Array.from(number)
// console.log(value)

// 9)keys() for of methode use 
// const number = ["one","two","three","four"];
// for(const ans of number.keys()){
//     console.log(ans)
// }

// 10)entries()
// const number = ["one","two","three","four"];
// for(const ans of number.entries()){
//     console.log(ans)
// }

// 11)with()
// const fruits = ['apple', 'banana', 'orange', 'mango'];

// // Using with() to create a new array with different values
// const modifiedFruits = fruits.with(1, 'pear'); // ['apple', 'pear', 'orange', 'mango']
// console.log(modifiedFruits);

//12) spread()(...)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);












