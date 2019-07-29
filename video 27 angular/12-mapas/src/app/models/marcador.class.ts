
// export class Marcador {

//     constructor(public lat: number, public lng: number) {
//     }
// }

export class Marcador {

    public lat: number;
    public lng: number;
    public titulo: string;
    public descripcion: string;

    constructor( lat: number,  lng: number) {
        this.lat = lat;
        this.lng = lng;
        this.titulo = 'Sin Titulo';
        this.descripcion = 'Sin Descripcion';
    }


}



