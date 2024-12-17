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
       // console.log(element);
    } 
})

// task 3 senior find with filter
const instructor = [
{name:"nodi", age:28, position:'senior'},
{name:"phodi", age:25, position:'junior'},
{name:"kodi", age:29, position:'senior'},
]
const FindInstructor=instructor.map(person=>{
    if (person.position==='senior') {
       // console.log(person.name + " is a "+ person.position + " instructor");
    }
})

const people=[
    {name:'Meena', age:20},
    {name:'feena', age:10},
    {name:'jeena', age:22},
]
let sum=0
for (const item of people) {
    sum +=item.age
  
}
//console.log(sum);
const findAvarage=people.reduce((prev, curr)=> prev+curr.age ,0)
console.log(findAvarage);



