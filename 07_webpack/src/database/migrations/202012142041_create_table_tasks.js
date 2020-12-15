exports.up = function ( knex ) {
    return knex.schema.createTable( 'tasks', ( table ) =>{
        table.increments();
        table.text( 'name' );
        table.text( 'description' );
        table.integer( 'value' );
    } );
};

exports.down = function ( knex ) {
    return knex.schema.dropTable( 'tasks' ) ;
};