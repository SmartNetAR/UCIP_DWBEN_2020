const http = require('http');
const url = require('url');

const server = http.createServer( ( req, res )=> {

    const empleado = {
        id: 1,
        nombre: 'john',
        salario: {
            id: 1,
            importe: 3000,
        }
    }

    console.log( req.method );
    console.log( req.url );

    const query = url.parse( req.url, true ).query;

    console.log(query);

    // res.statusCode = 200;
    // res.setHeader( 'Content-Type', 'application/json' );

    res.writeHead( 200, { 'Content-Type': 'text/html' } )
    res.write(`<h2>Hola ${query.name} Nodemon</h2>`);
    res.end();
} );

server.listen( 5000, () => console.log("Escuchando en el puerto 5000") );