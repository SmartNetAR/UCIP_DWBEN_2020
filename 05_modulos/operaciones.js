const PI = 3.1415

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a-b;
}

function calculo(a, b) {
    const res = suma(a, b) * PI;
    return resta(res, a); 
}

// module.exports = calculo;

// module.exports = {
//     PI: PI,
//     suma: suma,
//     calculo: calculo
// }

exports.PI = PI;
exports.calculo = calculo;