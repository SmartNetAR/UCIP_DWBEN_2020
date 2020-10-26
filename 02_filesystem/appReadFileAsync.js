const fs = require('fs');
fs.readFile('notas.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
});