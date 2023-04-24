//conversion larga 
var celsius= prompt("introduzca la temperatura en grados celsius: ");
celsius = parseFloat(celsius);

// conversion corta 
// var celsius = parselFloat(prompt("introduzca la temperatura en grados celsius :"));
var f = 9/5*celsius+32;
document.write("la conversión es: ", f);