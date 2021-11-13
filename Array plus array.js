function arrayPlusArray(arr1, arr2) {
    let sum=getSum(arr1)+getSum(arr2);

    return sum;
  }

  function getSum(arr){
     let sum=0;
     for(let elem of arr){
         sum+=elem;
     }
     return sum;
  }

 