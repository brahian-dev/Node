const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ( base = 5, listado = false, hasta ) => {
    try {
        let exit, print = '';

        for (let index = 1; index <= hasta; index++) {
            exit += `${ base } x ${ index }: ${ base * index }\n`
            print += `${ base } ${ 'x'.blue } ${ index }: ${ colors.italic.underline.yellow(base * index) }\n`
        }

        if (listado) {
            console.log('Tabla del:'.italic.underline.red, colors.italic.green(base))
            console.log('==============================')
            console.log(print)
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, exit)

        return `tabla-${ base }.txt`
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}