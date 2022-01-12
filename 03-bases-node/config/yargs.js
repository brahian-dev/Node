const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta donde se va a Multlipicar'
    })
    .option('l', {
        alias: 'listado',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en Consola'
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'La base tiene que se un Numero'
        }

        if ( isNaN(argv.h) ) {
            throw 'El hasta tiene que se un Numero'
        }

        return true
    })
.argv

module.exports = argv