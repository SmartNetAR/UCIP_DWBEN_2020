let empleados = [
    { id: 1, nombre: 'john' },
    { id: 2, nombre: 'mike' },
    { id: 3, nombre: 'eva' },
];

let salarios = [
    { id: 1, idEmpleado: 1, importe: 3000 },
    { id: 2, idEmpleado: 2, importe: 2000 }
];



function getEmpleado( idEmpleado, cb ) {
    const empleado = empleados.find( function ( empleado ) { return empleado.id === idEmpleado } );

    if (!empleado)
    {
        return cb( "El empleado no existe" );
    }

    cb( null, empleado );
}

const getSalario = ( empleado, cb ) => {
    const salarioDb = salarios.find( salario => salario.idEmpleado === empleado.id )
    if (!salarioDb)
    {
        return cb(`No se encontró un salario para el empleado ${empleado.nombre}` );
    }

    cb( null, salarioDb );

}

getEmpleado( 1, function ( err, empleado ) {
    if ( err ) {
        return console.log( "Error:", err );
    }

    getSalario( empleado, ( err, result ) => {
        if ( err ) {
            return console.log( "Error: ", err );
        }

        console.log(`El salario de ${empleado.nombre} es de $ ${result.importe}`);
    })

} );