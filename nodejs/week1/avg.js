const getNumbers = (process.argv[2]);
if (getNumbers === undefined){
    console.log("Enter numbers")
    return
}else{
    const myArray = (getNumbers.trim()).split(",");
    const numberArray = myArray.map(Number);
    console.log (numberArray);   

    if (myArray){
        if (numberArray.includes(Number.NaN)){
            console.log ('Enter numbers only!');
        }else{
            const average = numberArray.reduce((a, b) => a + b, 0) / numberArray.length;
            console.log(average);
        }
    }
}





    

