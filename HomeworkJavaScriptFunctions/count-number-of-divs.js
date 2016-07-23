/*Problem 4.	Count Number of DIVs
 Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML
 fragment passed as string. Write a JS program countOfDivs.js that invokes your function and prints the output at the console. */

var html = '<!DOCTYPE html> ' +
    '<html> <head lang="en">' +
    ' <meta charset="UTF-8"> <title>index</title> ' +
    '<script src="/yourScript.js" defer></script> </head> <body> <div id="outerDiv"> <divclass="first"> ' +
    '<div><div>hello</div></div> </div> <div>hi<div></div></div> <div>I am a div</div> </div> </body> </html>';

function countDivs(html) {
    var regex = new RegExp(/<div/g);
    var found = html.match(regex);

    console.log(found.length)
}

countDivs(html);