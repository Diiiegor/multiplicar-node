const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const {argv}=require('./config/yargs');
const colors = require('colors');


//recupero de la consola el primer comando  y valido que accion debe hacer
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`El archivo ${colors.green(`tabla-${argv.base}.txt`)} ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido')
}