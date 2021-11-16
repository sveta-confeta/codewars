function flawers(num1,num2){
   let flower1 = num1 % 2 == 0;
   let flower2 = num2 % 2 == 0;
   if (flower1 !== flower2){
       return true;
   } else {
       return false;
   }
}