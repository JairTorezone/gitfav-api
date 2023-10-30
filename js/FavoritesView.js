import { Favorites } from "./Favorites.js";

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".search button");

    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }

  update() {
    this.removeTrAll();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".user img").alt = `Image do ${user.name}`;

      row.querySelector(".user a").href = `https://github.com/${user.login}`;

      row.querySelector(".user p").textContent = `${user.name}`;

      row.querySelector(".user span").textContent = `/${user.login}`;

      row.querySelector(".repository").textContent = `${user.public_repos}`;

      row.querySelector(".followers").textContent = `${user.followers}`;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha");
        if (isOk) {
          this.delete(user);

          if (this.entries.length === 0) {
            const rowEmpty = this.createRowEmpty();

            this.tbody.append(rowEmpty);
          }
        }
      };

      this.tbody.append(row);
    });
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
