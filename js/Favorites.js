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
    const user = await GithubUser.search(username);

    console.log(user);
  }

  // delete(user) {
  //   const filteredEntries = this.entries.filter((entry) => {
  //     return entry.login !== user.login;
  //   });
  //   this.entries = filteredEntries;
  //   this.update();
  // }

  delete(user) {
    const filteredEntries = this.entries.filter((element) => {
      return user.login !== element.login;
    });
    this.entries = filteredEntries;
    this.update();
  }
}
