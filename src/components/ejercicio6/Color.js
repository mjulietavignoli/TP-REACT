export class Color {
  constructor(nombre) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
  }
}
