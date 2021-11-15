var greet = function(name) {
    let result=name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase();
    return 'Hello '+result+'!';
};
//"riley" --> "Hello Riley!"