/*Problem 5.	* Array Prototype Function
 Write a JavaScript function removeItem(value) that accept as parameter a number or string.
  The function should remove all elements with the given value from an array. Attach the function to the Array type.
   You may need to read about prototypes in JavaScript and how to attach methods to object types.
   You should return as a result the modified array. Write a sample program to demonstrate that your
   function works correctly for the examples below:*/

 var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];

Array.prototype.removeItem = function (value) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            delete arr[i];
        }
    }

    var resultArr = [];
    var indexResultArr = 0;

    for (var j = 0; j < arr.length; j++) {
        if(arr[j] !== undefined) {
            resultArr[indexResultArr] = arr[j];
            indexResultArr++;
        }


    };

    console.log(resultArr);
};


arr.removeItem(1);