export class SantoModel {
  #id;
  #nombre;
  #constelacion;
  #url;

  constructor(id, nombre, constelacion, url) {
    this.#id = id;
    this.#nombre = nombre;
    this.#constelacion = constelacion;
    this.#url = url;
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

  get Url() {
    return this.#url;
  }

  set Url(url) {
    this.#url = url;
  }

  toString() {
    return `${this.#nombre} ${this.#constelacion}`;
  }
}
