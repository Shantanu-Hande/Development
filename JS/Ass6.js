//Q1
const arr = [2,2,2,2,2];
const arrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
arrayAverage(arr);

//Q2
const isEven = (n) => {
    if(n%2 == 0){
        console.log("it is even");
    }else{
        console.log("it is not even");
    }
}