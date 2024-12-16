const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    // const element = colors.reverse();
    // console.log(element);
    reverse =[];
// for (let i = colors.length - 1; i >= 0; i--) {
//         reverse.push(colors[i])
// }
//     console.log(reverse);
    
    // for(let key of colors) {
    //     reverse.unshift(key)
    // } console.log(reverse);
    for (const key in colors) {
       reverse.unshift(colors[key])
    }console.log(reverse);
    