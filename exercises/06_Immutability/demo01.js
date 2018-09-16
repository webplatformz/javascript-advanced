// https://jsbin.com/tekejukatu/edit?js,console

let animal = {
    name: "Homer",
    age: 2,
    type: "hamster",
    legs: 4
};

let shallowCopy = Object.assign({}, animal);
console.log(animal === shallowCopy); // false

let [ name, age, type, legs ]  = animal;
console.log(name);