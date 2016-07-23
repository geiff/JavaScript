/*Problem 2.	String's letters organizer
 Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean.
 The function sorts all letters in the string in alphabetical order and returns the newly formed string.
 The sorting is ascending if the boolean is true otherwise the sorting is in descending order. Example:
 Note: The sorting is case-insensitive but the output should use the same casing as the input!
 Hint: You are allowed to use .sort() function.*/

 function sortLetters(str, bool) {
        var sortStr = [];

        for (var i = 0; i < str.length; i++) {
            sortStr[i] = str[i];
        }
    
    if(bool) {
        sortStr.sort(function (a, b) {
            if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
                return -1;
            } else if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        sortStr.sort(function (a, b) {
            if (b.toLocaleLowerCase() < a.toLocaleLowerCase()) {
                return -1;
            } else if (b.toLocaleLowerCase() > a.toLocaleLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    console.log(sortStr.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);
