const http = require('http');

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

    res.statusCode = 200;
    res.setHeader( 'Content-Type', 'application/json' );
    res.write(JSON.stringify( empleado ));
    res.end();
} );

server.listen( 5000, () => console.log("Escuchando en el puerto 5000") );