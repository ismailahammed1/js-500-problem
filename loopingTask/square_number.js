let num = 1;
while (num <= 100) {
    let isSquare = false;
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            isSquare = true;
            break;
        }
        if (!isSquare) {
            console.log("yes");
            
        }
    }
    console.log(num);
    num++;
}
