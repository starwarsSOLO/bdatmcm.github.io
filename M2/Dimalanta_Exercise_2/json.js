const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "cycling", "coding"]
};

const jsonString = JSON.stringify(person);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.hobbies);
