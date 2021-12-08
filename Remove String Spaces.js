function noSpace(x) {
    let arr = x.split('');
    let res = arr.filter(elem => {
            return elem !== " ";
        }
    )
    return res.join('');
}

console.log(noSpace('gggg g  kkk    l  '));