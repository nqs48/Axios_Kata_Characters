"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Services
import { SantosService } from "../model/services/santos.service.mjs";

class IndexController {
  #santosFakeAPI_URL;
  #privateView;

  constructor() {
    this.#santosFakeAPI_URL = Config.SantosFakeAPI_URL;
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
