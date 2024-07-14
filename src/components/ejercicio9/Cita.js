export class Cita {
  constructor(nombreMascota, nombreDueño, fecha, sintomas) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombreMascota = nombreMascota;
    this.nombreDueño = nombreDueño;
    this.fecha = fecha;
    this.sintomas = sintomas;
  }
}
