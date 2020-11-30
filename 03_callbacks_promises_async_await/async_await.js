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
async function getEmpleado( idEmpleado ) {
    const empleado = await empleados.find( function ( empleado ) { return empleado.id === idEmpleado } );

    if (!empleado)
    {
        throw new Error( "El empleado no existe" );
    }
    
    return( empleado );

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
/**
 * 
 * @param {number} idEmpleado 
 */
const mostrar = async (idEmpleado) => {
    try {
        const empleado = await getEmpleado(idEmpleado);
        const result = await getSalario(empleado);

        console.log(`El salario de ${result.empleado.nombre} es $ ${result.salario.importe}`);
    } catch (error) {
        console.log("ERROR: ", error );
    }

};

mostrar(1);
// mostrar(2);
// getEmpleado(3).then( empleado => console.log(empleado))

// getEmpleado(2)
//     .then( empleado => {
//         return getSalario( empleado )
//     })
//     .then ( result => console.log(`El salario de ${result.empleado.nombre} es $ ${result.salario.importe}`))
//     .catch( error => console.log("ERROR: ", error ) )
//     .finally( () => console.log("busqueda finalizada"))

