import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
    this.add();
  }

  load() {
    this.entries = [
      {
        login: "jairtorezone",
        name: "Jair Torezone",
        public_repos: "72",
        followers: "730",
      },
      {
        login: "JtRibeiro",
        name: "Josias Torezone",
        public_repos: "3",
        followers: "7",
      },
    ];
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);

      if (userExists) {
        throw new Error("Usuário já cadastrado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!");
      }

      this.entries = [user, ...this.entries];
      this.update();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter((element) => {
      return user.login !== element.login;
    });
    this.entries = filteredEntries;
    this.update();
  }
}
