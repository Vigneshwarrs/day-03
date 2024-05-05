let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

console.log(str1.length === str2.length);

if (obj1.name === obj1.name && obj1.age === obj2.age) {
  console.log("Both objects are equal");
} else {
  console.log("Both objects are not equal");
}
