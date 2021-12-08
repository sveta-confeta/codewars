function squareSum(numbers){
    let sum=0;
    for(let elem of numbers){
        sum+=Math.pow(elem,2);
    }
    return sum;
}