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
      let message = error.statusText || "Something went Wrong!!";
      console.error(message);
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

}
