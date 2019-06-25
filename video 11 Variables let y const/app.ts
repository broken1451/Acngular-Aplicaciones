// let es para funcion de bloques y var de forma global
    let mensaje = 'Hola';

    if (true) {

        let mensaje = 'Adios'
        console.log(mensaje);
    }

    console.log(mensaje);


// constantes
    //const OPCIONES = 'todas' siempre se debe inicializar
const OPCIONES = 'todas';

    if (true) {
        const OPCIONES = 'Ninguna';
        console.log(OPCIONES);
    }

    console.log(OPCIONES);

