

function pipeFix(numbers){
   let arr=[];
     for(let k= numbers[0]; k <= numbers[numbers.length-1]; k++){
         arr.push(k);
     }

   return arr;
}

console.log(pipeFix([1,6,8]));