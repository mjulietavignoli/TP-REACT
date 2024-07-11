export class Pelicula {
  constructor(nombre, descripcion, genero) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.genero = genero;
  }
}
