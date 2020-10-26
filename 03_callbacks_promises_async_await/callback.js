let empleados = [
    { id: 1, nombre: 'john' },
    { id: 2, nombre: 'mike' },
    { id: 3, nombre: 'eva' },
];

let salarios = [
    { id: 1, importe: 3000 },
    { id: 2, importe: 2000 }
];



function getEmpleado( idEmpleado, cb ) {
    const empleado = empleados.find( function ( empleado ) { return empleado.id === idEmpleado } );

    if (!empleado)
    {
        return cb( "El empleado no existe" );
    }

    cb( null, empleado );
}

getEmpleado( 5, function ( err, empleado ) {
    if ( err ) {
        return console.log( "Error:", err );
    }

    console.log("Empleado: ", empleado.nombre);

} );