const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear()

crearArchivo( argv.b, argv.l, argv.h )
        .then( name => console.log(name.italic.underline.red, 'Creado'.italic.green) )
        .catch( err => console.log(err) )