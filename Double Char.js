function doubleChar(str) {
  let dubleStr = "";
for(let i = 0; i < str.length; i++){
   dubleStr=dubleStr + (str[i]+str[i]);
}
return dubleStr;
}

console.log( doubleChar('sveta'));