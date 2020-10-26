const fs = require('fs');

let notasBuffer = fs.readFileSync( 'notas.txt' );

console.log( notasBuffer.toString() );