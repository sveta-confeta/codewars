function findDifference(a, b) { 
    if(sumCub(a) > sumCub(b)){
        return sumCub(a)-sumCub(b);
    } else {    
        return sumCub(b)-sumCub(a);
    }
    

  }

  function sumCub(arr){
    let sum=1;
    for(let elem of arr){
         sum*=elem;
    }
    return sum;
  }

  