let empleados = [
    { id: 1, nombre: 'john' },
    { id: 2, nombre: 'mike' },
    { id: 3, nombre: 'eva' },
];

let salarios = [
    { id: 1, idEmpleado: 1, importe: 3000 },
    { id: 2, idEmpleado: 2, importe: 2000 }
];


/**
 * 
 * @param {number} idEmpleado
 */
function getEmpleado( idEmpleado ) {
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( function ( empleado ) { return empleado.id === idEmpleado } );
    
        if (!empleado)
        {
            return reject( "El empleado no existe" );
        }
        setTimeout(() => {
            resolve( empleado );
        }, 2500);

    } )
}

/**
 * 
 * @param {number} empleado 
 */
const getSalario = ( empleado ) => {
    return new Promise( (resolve, reject) => {
        const salarioDb = salarios.find( salario => salario.idEmpleado === empleado.id )
        if (!salarioDb)
        {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}` );
        }
        setTimeout(() => {
            resolve( {
                        salario: salarioDb,
                        empleado: empleado
                    } );
        }, 1000);
    } )

}


getEmpleado(2)
    .then( empleado => {
        return getSalario( empleado )
    })
    .then ( result => console.log(`El salario de ${result.empleado.nombre} es $ ${result.salario.importe}`))
    .catch( error => console.log("ERROR: ", error ) )
    .finally( () => console.log("busqueda finalizada"))

