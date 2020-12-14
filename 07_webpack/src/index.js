import express from 'express' ;
import config from './config' ;
import morgan from 'morgan' ;
import router from './router' ;

const app = express() ;
app.use( morgan( 'dev' ) ) ;
app.use( express.urlencoded( { extended:true } ) ) ;
app.use( express.json() ) ;


router( app ) ;

app.use( '*', ( req, res ) => {
    res.status( 400 ).json( { ok:false, msg: 'ruta no admitida' } ) ;
} ) ;

app.listen( config.port, () => console.log( `running with webpack in port ${config.port}` ) ) ;

export default app ;