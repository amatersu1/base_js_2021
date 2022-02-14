// 1.  Вывести в консоль Hello Wolrd
console.log("Hello world");

// 2. Создать переменную для каждого типа данных
const ourNamePlanet = "Earth";
const myAge = 23;
const isProgrammer = true;
const lastName = null;
let x;
const bigInt = 19290n;
let id = Symbol("id");
const user = {
  name: "Anton",
  age: 23,
};

// 3. Вывести в консоль редактора кода значение переменных
console.log(ourNamePlanet, myAge, isProgrammer, lastName, x, bigInt, id, user);

//4.Вывести ее тип через оператор typeof и функцию typeof
console.log(
  typeof ourNamePlanet,
  typeof myAge,
  typeof isProgrammer,
  typeof lastName,
  typeof x,
  typeof bigInt,
  typeof id,
  typeof user
);

//5.
//const cityName = 'NN'
//cityName = 'LosAngeles'
//console.log(cityName);
console.log(user.name);
user.name = "Ivan";
console.log(user.name);

let userPermition = {};
console.log(userPermition);
