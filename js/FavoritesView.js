import { Favorites } from "./Favorites.js";

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
  }
}
