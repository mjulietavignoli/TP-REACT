export class Contacto {
  constructor(nombre, apellido, dni, email) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
  }
}
