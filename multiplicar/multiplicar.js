const fs = require('fs');
const colors = require('colors');


//crea el archivo txt con la tabla de multiplicar especificada
let crearArchivo=(base,limite)=>{
    return new Promise((resolve,reject)=>{
        if (!Number(base)){
            reject(`El valor ingresado "${base}" no es un numero`);
            return;
        }

        let data='';
        for(let i=1;i<=limite;i++){
            data+=`${base}*${i}=${base*i}\n`;
        }
        //escribimos la tabla del 2 en un archivo externo
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
};

let listarTabla=(base,limite)=>{
    console.log('====================================='.blue)
    console.log(`tabla del ${base} en limite ${limite}`.blue)
    console.log('====================================='.blue)
    console.log()
    for(let i=1;i<=limite;i++){
        let data=`${base}*${i}=${base*i}`;
        console.log(data);
    }
}

module.exports={
    crearArchivo,
    listarTabla
};