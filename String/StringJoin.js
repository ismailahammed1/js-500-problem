const statement = "I am a hard working person";
// let str=statement.reverse()
// console.log(str);
let reverse = "";
// for (const item of statement) {
//     reverse=item+reverse

// }
// console.log(reverse);


for (let i = statement.length; i > 0; i--) {
  console.log(statement.substring(0, i));
}

console.log(reverse);
