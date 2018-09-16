// https://jsbin.com/sedicejaja/edit?js,console

let a1 = { name: "Homer", age: 2, type: "hamster", legs: 4 };
let a2 =  { name: "Ms Kitty", age: 9, type: "cat", legs: 3 };

let shallowCopy = { ...a1 };
console.log(shallowCopy);