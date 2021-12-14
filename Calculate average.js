function find_average(array) {
    let sum=0;
    // your code here
    for (let el of array){
        sum=sum+el;
    }
    if(sum>0) return sum / array.length;
    if(array= []) return 0;


}