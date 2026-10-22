export class Producto {
    //Las propiedades deben ser publicas
    //Tendremos un constructor para enviar los datos
    //al crear el modelo
    constructor(
        public nombre: string,
        public imagen: string,
        public precio: number) {
    }
}