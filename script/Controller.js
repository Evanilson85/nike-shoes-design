
class Color {
  constructor() {
    this.label = document.querySelectorAll("label");
    this.background = document.querySelector(".grafite");
    this.imgs = document.querySelector(".tenis");
    this.numbers = document.querySelectorAll(".number");
    this.btns = document.querySelectorAll(".btn");
    this.row = document.querySelectorAll("hr");

  
    this.size();
    this.click();
    this.btn();
    this.teste()

  }

  click() {
    this.label.forEach((btns) => {
      btns.style.cursor = "pointer";
      btns.addEventListener("click", (e) => {
        this.removeAtivo(btns);
        this.adicionar(e, "ativo");
        let color = e.target.className;
        this.cores(color);
      });
    });
  }

  size(cor) {
    this.numbers.forEach((btn) => {
      this.ifs(btn, cor);
      btn.addEventListener("click", (e) => {
        this.removeBtns();
        let alvo = e.target;
        alvo.style.background = "red";
        this.adicionar(e, "ativos");
        this.ifs(alvo, cor);
      });
    });
  }

  ifs(alvo, cor) {
    if (alvo.className == "number ativos") {
      alvo.style.background = cor;
    }
  }

  swapElement(cores, img) {
    this.linha(`${cores}`);
    this.size(`${cores}`);
    this.background.style.background = `${cores}`;
    this.btn(`${cores}`);
    this.imgs.src = `img/${img}.png`;
  }

  cores(cor) {
    switch (cor) {
      case "red ativo":
        this.swapElement("red", "red");

        break;
      case "blue ativo":
        this.swapElement("blue", "blue");

        break;
      case "green ativo":
        this.swapElement("green", "green");

        break;
      case "black ativo":
        this.swapElement("black", "black");

        break;
      case "orange ativo":
        this.swapElement("#cc4823", "orange");

        break;
    }
  }
  btn(cor) {
    this.btns.forEach((e) => {
      e.style.background = cor;
    });
  }

  adicionar(add, addClas) {
    add.target.classList.add(`${addClas}`);
  }

  removeAdd(alvo, removeClas) {
    return alvo.classList.remove(`${removeClas}`);
  }

  removeAtivo() {
    this.label.forEach((btns) => {
      return this.removeAdd(btns, "ativo");
    });
  }

  removeBtns() {
    this.numbers.forEach((btns) => {
      btns.style.background = "white";
      this.removeAdd(btns, "ativos");
    });
  }

  linha(cor) {
    this.row.forEach((e) => {
      return (e.style.background = `${cor}`);
    });
  }
}
