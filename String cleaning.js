function stringClean(s){
    let arr = s.split('');

    let arr2= arr.filter(f=> f!=parseInt(f));

    console.log(arr2);
    return arr2.join('');

}