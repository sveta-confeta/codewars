function opposite(num) {
    if (num < 0){
        return Math.abs(num);
    } else if(num > 0) {
        return -num;
    } else{
        return 0;
    }
  }

  console.log(opposite(0));