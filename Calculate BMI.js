function bmi(weight, height) {
    let result=Number((weight/(height * height)).toFixed(1));
    debugger
    if(result <= 18.5){
        return   "Underweight"
    }
    if(result <= 25.0){
        return  "Normal"
    }
    if (result  <= 30.0){
        return "Overweight"
    }else {
        return  "Obese"
    }
}

console.log(bmi(56,1.70));