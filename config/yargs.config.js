const yargs = require( 'yargs' )
	.option('b', {
		alias: 'base', 
		demandOption: true,
		default: '5', 
		type: 'number',
		describe: 'b is the base to calculate'
	})
	.option('l', {
		alias: 'listas', 
		demandOption: false,
		default: false,
		type: 'boolean',
		describe: 'if it true the app shows you the table on console'
	})
	.option('h', {
		alias: 'hasta',
		demandOption: false, 
		default: 10,
		type: 'number',
		describe: 'up to which number we are going to multiply'
	})
	.check( (yargs, options) => {
		if ( isNaN( yargs.b )) {
			throw 'La base tiene que ser un numero';
		}
		return true;
	} )
	.argv;

module.exports = yargs;