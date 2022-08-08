"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { SantoModel } from "../model/santo.model.mjs";

// import { CharacterModel } from "../model/character.model.mjs";

// Services
import { SantosService } from "../model/services/santos.service.mjs";

class IndexController {
  // #privateUser;
  #santosFakeAPI_URL;
  #privateView;

  constructor() {
    this.#santosFakeAPI_URL = Config.SantosFakeAPI_URL;
    // this.#privateUser = new UserModel();
    // this.#privateUser.Name = "Julian";
    // this.#privateUser.Lastname = "Lasso";
    this.#privateView = new IndexView();
  }

  async init() {
    const data = new SantosService(this.#santosFakeAPI_URL);
    const characterList = await data.setModel();
    this.#privateView.init(characterList);
  }
}

export const index = new IndexController();
index.init();
