"use strict";

export class IndexView {
  #privateBody;

  constructor() {
    document.title = "Saint Seiya";
    this.#privateBody = document.querySelector("body");
  }


  init(data) {
    this.#privateBody.className = "body_index";
    const containerHeader = this.#privateCreateContainer();
    containerHeader.className = "header_container";

    const imgHeader = document.createElement("img");
    imgHeader.src =
      "../../../assets/img/SaintSeiyaLogo.png";

    imgHeader.className = "image_header";

    containerHeader.append(imgHeader);

    const container = this.#privateCreateContainer();
    container.className = "main_container";

    

    data.forEach((c) => {
      const anchor = this.#privateCreateAnchor();
      anchor.href = "/details.html";
      // anchor.target="_blank";

      const button = this.#privateCreateButton();
      button.className = "button_container";
      // button.addEventListener("click", () => {
      //   localStorage.setItem(
      //     "character",
      //     JSON.stringify(
      //       `${c.Name},${c.Status},${c.Species},${c.Image},${c.Gender}`
      //     )
      //   );
      //   // window.open("/source/javascript/view/details.html");
      //   console.log(c);
      // });

      const paragraph = this.#privateCreateParagraph();
      const img = document.createElement("img");
      img.className = "images_list";
      img.src = "c.Image";
      paragraph.textContent = c.Nombre;
      button.append(img, paragraph);
      anchor.append(button);
      container.append(anchor);
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
