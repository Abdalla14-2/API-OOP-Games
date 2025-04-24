export class GameDetails {
  constructor(container, closeButton, detailsSection) {
    this.container = container;
    this.closeButton = closeButton;
    this.detailsSection = detailsSection;

    this.closeButton.addEventListener("click", () => {
      this.detailsSection.classList.add("d-none");
      this.detailsSection.classList.remove("d-block");
    });
  }

  showDetails(game) {
    console.log("Game details:", game);
    this.container.innerHTML = `
        <div class="content-img col-md-6 col-lg-6 col-sm-12 px-1">
          <img src="${game.thumbnail}" alt="${game.title}" class="w-100">
        </div>
        <div class="content-text col-md-6 col-lg-6 col-sm-12 px-1">
          <h3 class="text-white">Title: ${game.title}</h3>
          <div class="content-text-badge">
            <h6 class="text-white">Category: <span class="badge text-bg-info">${game.genre}</span></h6>
          </div>
          <div class="content-text-badge my-4">
            <h6 class="text-white">Platform: <span class="badge text-bg-info">${game.platform}</span></h6>
          </div>
          <div class="content-text-badge mb-4">
            <h6 class="text-white">Status: <span class="badge text-bg-info">${game.status}</span></h6>
          </div>
          <div class="text-infos">
            <p class="text-white">${game.description}</p>
          </div>
          <div class="content-btn">
            <a href="${game.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
          </div>
        </div>
      `;
  }
}
