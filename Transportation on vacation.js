function rentalCarCost(d) {
    let oneDay= 40;
    let price = d * oneDay;
  if(d <= 2){
      return price;
  } if (d >=3 && d < 7){
      return price - 20;
  } if ( d >= 7){
      return price - 50;
  }
}