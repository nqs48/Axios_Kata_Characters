export class SantoModel {
  #id;
  #nombre;
  #constelacion;

  constructor(id, nombre, constelacion) {
    this.#id = id;
    this.#nombre = nombre;
    this.#constelacion = constelacion;
  }
  get Id() {
    return this.#id;
  }

  get Nombre() {
    return this.#nombre;
  }

  set Nombre(nombre) {
    this.#nombre = nombre;
  }

  get Constelacion() {
    return this.#constelacion;
  }

  set Constelacion(constelacion) {
    this.#constelacion = constelacion;
  }

  toString() {
    return `${this.#nombre} ${this.#constelacion}`;
  }
}
