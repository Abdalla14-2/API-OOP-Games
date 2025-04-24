import { GameCard } from "./Card.js";

export class GameList {
  constructor(container, detailsSection) {
    this.container = container;
    this.detailsSection = detailsSection;
  }

  render(games, onCardClick) {
    this.container.innerHTML = "";
    games.forEach((game) => {
      const card = new GameCard(game, (id) => {
        this.detailsSection.classList.remove("d-none");
        this.detailsSection.classList.add("d-block");
        onCardClick(id);
      });
      this.container.appendChild(card.render());
    });
  }
}
