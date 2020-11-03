// const operacion = require("./operaciones")

const {PI, calculo, multiplicar, persona} = require("./operaciones")

// import operacion from "./operaciones"

// console.log(operacion);

// const PI = operacion.PI;
// const calculo = operacion.calculo;


console.log("PI = ", PI);
console.log(calculo(30, 20));
console.log("multiplicar 3x3: ", multiplicar(3,3))
console.log(persona())