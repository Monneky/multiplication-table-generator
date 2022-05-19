const { crearArchivo } = require( './helpers/multiplicar' );
const  yargs = require('./config/yargs.config')

console.clear();

//console.log(process.argv);
/*
const [  , , arg3 = 'base=5' ] = process.argv;

const [ , base = 5 ] = arg3.split( '=' );
*/


crearArchivo( yargs.b, yargs.l, yargs.h )
	.then( nombreArchivo => console.log( nombreArchivo ) )
	.catch( err => console.log( err ) );
