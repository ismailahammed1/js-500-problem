const findEvenandMakeOdd=[1,3,4,5,6,8,9,10,12]

for (let i = 0; i < findEvenandMakeOdd.length; i++) {
    if (findEvenandMakeOdd[i]%2!=0) {
        const element = findEvenandMakeOdd[i]+1;
        // console.log(element);
    }    
}
const findeven=findEvenandMakeOdd.map(num=>{
    if (num%2==0) {
        const element = num+1;
        console.log(element);
    } 
})

