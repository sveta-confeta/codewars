// complete the function
function solution(string) {
    let result="";
    for(let i=0;i<string.length;i++){
     let char=string.slice(i,i+1);
     if(char===char.toUpperCase()){
         result+=' '+char;
     }else{
         result+=char;
     }
    }
    return result;
}

