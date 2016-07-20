/*Problem 1.	Group People
Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name. 
Create a Person constructor to add every person in the person array. The groupBy('criteria') 
function must return an object, with keys – the groups (age, firstName and lastName) and values – arrays
with people in this group. Print on the console every entry of the returned object. Use function overloading 
(i.e. just one function). You may need to find how to use constructors.*/

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function groupBy(str) {
    var people = [
        new Person("Scott", "Guthrie", 38),
        new Person("Scott", "Johns", 36),
        new Person("Scott", "Hanselman", 39),
        new Person("Jesse", "Johns", 57),
        new Person("Jon", "Skeet", 38)
    ];

    var result = {};

    for (var i = 0; i < people.length; i++){
        var key = "Group " + people[i][str].toString();

        if (typeof(result[key]) === "undefined") {
            result[key] = [];
        }

        result[key].push(people[i].firstName + " " + people[i].lastName + "(age " + people[i].age + ")");
        }

    console.log(result);
}

groupBy('lastName');