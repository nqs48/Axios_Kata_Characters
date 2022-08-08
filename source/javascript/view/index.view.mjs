"use strict";

export class IndexView {
  #privateBody;

  constructor() {
    document.title = "Saint Seiya | Axios";
    this.#privateBody = document.querySelector("body");
  }


  init(data) {
    console.log(data);
    this.#privateBody.className = "body_index";
    const containerHeader = this.#privateCreateContainer();
    containerHeader.className = "header_container";

    const imgHeader = document.createElement("img");
    imgHeader.src ="/assets/img/SaintSeiyaLogo.png";
    imgHeader.alt= "Header image SaintSeiya";
    imgHeader.className = "image_header";

    containerHeader.append(imgHeader);

    const container = this.#privateCreateContainer();
    container.className = "main_container";

    data.forEach((c) => {
      const div = this.#privateCreateContainer();

      const button = this.#privateCreateButton();
      button.className = "button_container";

      const paragraphName = this.#privateCreateParagraph();
      paragraphName.textContent = c.Nombre;
      paragraphName.className = "paragraph";
      const paragraphConstellation = this.#privateCreateParagraph();
      paragraphConstellation.textContent = c.Constelacion;
      paragraphConstellation.className = "paragraph";
      const img = document.createElement("img");
      img.className = "images_list";
      img.src = c.Url;
      img.alt = "Image Character";
      const divButtons = this.#privateCreateContainer();
      divButtons.className = "buttons_container";

      const buttonEdit = this.#privateCreateButton();
      buttonEdit.textContent = "Update";
      buttonEdit.className = "button_edit button edit";
      buttonEdit.dataset.id=`${c.Id}`;
      buttonEdit.dataset.name=`${c.Nombre}`;
      buttonEdit.dataset.constellation=`${c.Constelacion}`;
      buttonEdit.dataset.url=`${c.Url}`;
      const buttonDelete = this.#privateCreateButton();
      buttonDelete.textContent = "Delete";
      buttonDelete.className = "button_delete button delete";
      buttonDelete.dataset.id=`${c.Id}`;
      divButtons.append(buttonEdit, buttonDelete);

      button.append(img, paragraphName, paragraphConstellation, divButtons);
      div.append(button);
      container.append(div);
    });
    this.#privateBody.append(containerHeader, container);
  }

  #privateCreateParagraph() {
    return document.createElement("p");
  }

  #privateCreateContainer() {
    return document.createElement("div");
  }

  #privateCreateImg() {
    return document.createElement("img");
  }

  #privateCreateButton() {
    return document.createElement("button");
  }

  #privateCreateAnchor() {
    return document.createElement("a");
  }
}
