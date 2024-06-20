class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.age = age;
    }
}

let people = [];

let count = prompt("How many people? : ");

for (i = 0; i < count; i++)
    {
        let people[i].firstName = prompt("Enter first name of person %i", i);
        let people[i].age = prompt("Enter age of person %i", i);
    }

console.log(people);
