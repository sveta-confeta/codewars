
   function addLength(str) {
    let fas=str.split(' ')
   let arr=[];
 for (let i=0; i<fas.length; i++){
   arr.push(fas[i]+' '+fas[i].length);
 }
   return arr;
 }