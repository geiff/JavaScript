/*Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters:
radius and the height of a straight circular cylinder. The function calculates the volume of the cylinder.
Write JS program cylinderVol.js that calculates the volume of a few cylinders.
The result should be printed on the console. Run the program through Node.js.*/
function cylinderVolume(arrs) {
    var r = Number(arrs[0]);
    var h = Number(arrs[1]);
    var v = Math.PI * r * r * h;
    console.log(v.toFixed(3));
}

cylinderVolume(['2', '4']);