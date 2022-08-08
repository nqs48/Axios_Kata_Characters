import { SantoModel } from "../santo.model";

export class SantosService {
  #privateUrl;

  constructor(url) {
    this.#privateUrl = url;
  }

  getCharacters() {
    return fetch(`${this.#privateUrl}/santos`).then((response) =>
      response.then((res) => res.data)
    );
  }

  async setModel() {
    const listAPI = await this.getCharacters();
    return listAPI.map(
      (s) => new SantoModel(s.id,s.nombre, s.constelacion)
    );
  }

  // getLocalStorage() {
  //   if (localStorage.getItem("character")) {
  //     let items = localStorage
  //       .getItem("character")
  //       .slice(0, -1)
  //       .replace('"', "");
  //     const list = items.split(",");
  //     const object = new CharacterModel(
  //       list[0],
  //       list[1],
  //       list[2],
  //       list[3],
  //       list[4]
  //     );
  //     console.log(object.toString());
  //     return object;
  //   }
  // }
}
