import { SantoModel } from "../santo.model.mjs";

export class SantosService {
  #privateUrl;

  constructor(url) {
    this.#privateUrl = url;
  }

  async getCharacters() {
    try {
      let res=axios.get(`${this.#privateUrl}/santos`);
      return res;
    } catch (error) {
      
    }

    
  }


  async setModel() {
    const res = await this.getCharacters();
    let listAPI = res.data;
    console.log(listAPI);
    return listAPI.map(
      (s) => new SantoModel(s.id,s.nombre, s.constelacion,s.url)
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
