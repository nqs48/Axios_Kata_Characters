"use strict";

export class SantoModel {
  #nombre;
  #constelacion;

  constructor() {
    this.#nombre = "";
    this.#constelacion = "";
  }

  get Nombre() {
    return this.#nombre;
  }

  set Nombre(name) {
    this.#nombre = name;
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
