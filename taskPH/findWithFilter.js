const arrayFilter=[12,16,10,20,25,30,40,45,50,66,60,77,70,80,88,90,99]

const  findFilterNUmber=arrayFilter.filter(num=>{
    if (num%10===0) {
    //    console.log("filter:",num); 
    }
}
)
const  findFindNUmber=arrayFilter.find(num=>{
    if (num%10===0) {
    //    console.log("find:",num); 
    }
}
)





for (const item of arrayFilter) {
    if (item % 10 === 0) {

        console.log(item);
    }
}

