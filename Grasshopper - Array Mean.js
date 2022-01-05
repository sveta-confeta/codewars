var findAverage = function (nums) {
    let sum=0;
    for(let n of nums){
        sum+=n;
    }
    return sum/nums.length;
}