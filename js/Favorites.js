export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
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

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => {
      return entry.login !== user.login;
    });
    this.entries = filteredEntries;
    this.update();
  }
}
