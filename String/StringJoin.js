const statement = "I am a hard working person";
// let str=statement.reverse()
// console.log(str);
let reverse = "";
// for (const item of statement) {
//     reverse=item+reverse

// }
// console.log(reverse);

const reversedStatement = statement.split(' ').reverse().join(' ');
console.log(reversedStatement); // Output: "person working hard a am I"


for (let i = statement.length; i > 0; i--) {
  console.log(statement.substring(0, i));
}

console.log(reverse);
