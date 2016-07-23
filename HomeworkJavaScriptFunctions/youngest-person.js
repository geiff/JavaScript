/*Problem 3.	Find Youngest Person that has a smartphone
 Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people,
 finds the youngest person that has a smartphone and returns his full name. Write a JS program youngestPerson.js
 to execute your function for the below examples and print the result at the console.*/

 var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];

function findYoungestPerson(person) {
    var minAge = Number.MAX_VALUE;
    var nameMinAge;

    for (var i = 0; i < person.length; i++) {
        if (person[i].age < minAge && person[i].hasSmartphone) {
            minAge = person[i].age;
            nameMinAge = person[i].firstname + " " + person[i].lastname;
        }

    }

    console.log('The youngest person is ' + nameMinAge);
}


findYoungestPerson(people);