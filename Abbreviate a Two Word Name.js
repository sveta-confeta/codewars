function abbrevName(name) {

    let arr = name.split(' ');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase();
    }


    return arr.join('.');
}

console.log(abbrevName('name family'));