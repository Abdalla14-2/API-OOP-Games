export class GameCard {
  constructor(game, onClick) {
    this.game = game;
    this.onClick = onClick;
  }

  render() {
    const card = document.createElement("div");
    card.className = "card col-sm-12 col-md-3 col-lg-3 bg-transparent mt-3";
    card.dataset.id = this.game.id;

    card.innerHTML = `
      <img src="${this.game.thumbnail}" class="card-img-top mt-4" alt="${this.game.title}">
      <div class="card-body">
        <div class="card-top-content d-flex justify-content-between align-items-center mb-2">
          <h5 class="card-title text-white h6 text-capitalize">${this.game.title}</h5>
          <span class="badge text-capitalize">Free</span>
        </div>
        <p class="card-text text-center d-flex justify-content-center text-capitalize">
          ${this.game.short_description}
        </p>
      </div>
      <div class="card-footer d-flex justify-content-between pb-0 mb-3 custom-footer">
        <span class="badge text-bg-secondary">${this.game.genre}</span>
        <span class="badge text-bg-secondary">${this.game.platform}</span>
      </div>
    `;

    card.addEventListener("click", () => this.onClick(this.game.id));

    return card;
  }
}
