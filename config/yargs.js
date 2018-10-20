const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
//defino un comando listar que recibe 2 parametros: base y limite para crear tablas de multiplicar
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea el archivo con la tabla de multiplicar', options)
    .help()
    .argv;
module.exports = {
    argv
};