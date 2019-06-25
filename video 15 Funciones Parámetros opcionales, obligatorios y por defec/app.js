// parametros obligatorios
function activar(quien) {
    var mensaje = quien + " activo la batisenal";
    console.log('El mensaje es: ', mensaje);
}
activar('Gordon');
///////////////////////////////////////
// parametros defecto
//function activar1( quien: string, valor por defecto: string = 'batisenal'  )
function activar1(quien, objeto) {
    if (objeto === void 0) { objeto = 'batisenal'; }
    var mensaje = quien + " activo la " + objeto;
    console.log('El mensaje es: ', mensaje);
}
activar1('Gordon');
// parametros opcionales
//function activar2( quien: string, objeto: string = 'batisenal ', valor Opcional?:string  )
function activar2(quien, objeto, momento) {
    if (objeto === void 0) { objeto = 'batisenal '; }
    if (momento) {
        var mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        var mensaje = quien + " activo la " + objeto + " ";
    }
    console.log('El mensaje es: ', mensaje);
}
activar2('Gordon', 'batisenal', 'tarde');
