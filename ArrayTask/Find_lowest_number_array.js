// const heights2 = [167,  120, 168, 137, 190];
// let highestHeight = heights2[0]; 

// for (let index = 0; index < heights2.length; index++) {
//     if (heights2[index] > highestHeight) {
//         highestHeight = heights2[index]; 
//     }
// }

// console.log(highestHeight); 

// Find the friend with the smallest name.
const smallest = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName=smallest[0]

for (let index = 0; index < smallest.length; index++) {
    if (smallest[index].length<smallName.length) {
        smallName=smallest[index]
    }
    
}console.log(smallName);
