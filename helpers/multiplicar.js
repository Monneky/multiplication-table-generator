const fs = require( 'fs' );
const color = require( 'colors' );

const crearArchivo = async ( b, l, h ) => {
    try {
        let salida = '', consola = ''; 

        consola += color.red('======================================\n');
        consola += `              Tabla del ${ color.red(b) }\n`;
        consola += `              Hasta el numero ${ color.red(h) }\n`
        consola += color.red('======================================\n')
        salida += '======================================\n';
        salida += `              Tabla del ${ b }\n`;
        salida += `              Hasta el numero ${ h }\n`
        salida += '======================================\n';

        for( let i = 0 ; i < h; i++ ) {
            consola += `${ color.green.dim(b) } ${color.brightRed.bold('x')} ${ color.yellow.bold(i + 1) } = ${ b * ( i + 1 ) }\n`;
            salida += `${ b } x ${ i + 1 } = ${ b * ( i + 1 ) }\n`;
        }

        fs.writeFileSync( `./salida/Tabla - ${b}.txt`, salida );

        if( l === true){ 
            console.log( consola );
        }

        return ( color.bgRed(`Tabla del ${b} Creada`) );
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
