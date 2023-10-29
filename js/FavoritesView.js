import { Favorites } from "./Favorites.js";

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td class="user">
              <img
                src="https://github.com/jairtorezone.png"
                alt="Imagem do Jair"
              />
              <a href="https://github.com/jairtorezone" target="_blank">
                <p>Jair Torezone</p>
                <span>/jairTorezone</span>
              </a>
            </td>
            <td class="repository">123</td>
            <td class="followers">1234</td>
            <td class="action">
              <button class="remove">Remover</button>
            </td>
          `;
    return tr;
  }

  createRowEmpty() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td colspan="4" class="table-empty">
              <div>
                <img src="./assets/img/Estrela.svg" alt="" />
                <p>Nenhum favorito ainda</p>
              </div>
            </td>
          `;
    return tr;
  }

  removeTrAll() {
    this.tbody.querySelectorAll("tr").forEach((element) => {
      element.remove();
    });
  }
}
