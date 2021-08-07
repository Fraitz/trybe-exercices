let myMap = new Map();

let keyString = "uma string",
    keyObj = {},
    keyFunc = function () {};

// configurando os valores
myMap.set(keyString, "valor associado com 'uma string'");
myMap.set(keyObj, "valor associado com keyObj");
myMap.set(keyFunc, "valor associado com keyFunc");

console.log(myMap);

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

console.log(user.get("age"));