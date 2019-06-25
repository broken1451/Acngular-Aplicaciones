
// Interfacess
   interface Xmen {
      nombre:string,
      poder: string    
   }


function enviarMision(xmen:Xmen) {
   console.log('Enviando a: ' + xmen.nombre);
}

function enviarAcuartel(xmen:Xmen) {
   console.log('Enviando al cuartel: ' + xmen.nombre);
}


let wolverine:Xmen = {
   nombre: 'Wolverine',
   poder: 'Regeneracion'
}


enviarMision(wolverine);
enviarAcuartel(wolverine);




