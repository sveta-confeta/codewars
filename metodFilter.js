function getEvenNumbers(arr){
    return arr.filter( elem=>{
        return elem % 2 == 0 ;
    })
}
  console.log(getEvenNumbers([2,5,7,8]));

// should == [2,4,6]