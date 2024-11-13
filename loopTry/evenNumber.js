// let num = 40;
// for (let i = 0; i <= num; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// let num2 = 40;
// for (let i = 0; i <= num2; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("hello", i);
// }

// for (let i = 55; i <= 85; i++) {
//   if ( i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
  
// }
// // Skip even numbers and numbers divisible by 5 } console.log(i);
// // Print odd numbers not divisible by


// // "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
// for (let index = 1; index <= 60; index++) {
//  console.log("I will invest at least 6 hrs every single day for next 60 days!",index);
   
// }
// // oddd
// for (let index = 61; index < 100; index++) {
//   if (index%2===0) {
//     console.log(index);
    
//   }
  
// }
// for (let index = 61; index < 100; index++) {
//   if (index%2!==0) {
//     console.log(index);
    
//   }
  
// }
// // Display sum of all the odd numbers from 91 to 129.

// sum =0;
// for (let index =91; index < 129; index++) {
//   if (index%2===0) {
//     sum+=index   
//   }
// }
// console.log(sum);
// // Display sum of all the even numbers from 51 to 85.

// sum =0;
// for (let index =51; index < 85; index++) {
//   if (index%2===0) {
//     sum+=index   
//   }
// }
// console.log(sum);

multiplication =1;
// for (let index =1; index <=9; index++) {
//     multiplication=9*index
//     console.log(`9*${index} = ${multiplication}`,   ); 
  
// }
let index = 1;
 let sum = 0;

 while (index <= 9) {
  if (index % 2 === 0) {
    sum += index;
    multiplication=9*index
  }

  index++;
  console.log(`9*${index} = ${multiplication}`,   );
}

console.log("Sum of even numbers:", sum);