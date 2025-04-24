import { GameList } from "./GameList.js";
import { GameDetails } from "./GameDetails.js";
import { GameService } from "./GameService.js";

const gamesContainer = document.getElementById("gamesContainer");
const gameDetailsContainer = document.getElementById("gameDetails");
const xMark = document.getElementById("xMark");
const detailsSection = document.getElementById("detailsSection");
const navItems = document.querySelectorAll(".nav-link");

const gameService = new GameService(
  "16c27d5c1cmsh4449cca519abac7p14c998jsn74e631d000d6"
);
const gameList = new GameList(gamesContainer, detailsSection);
const gameDetails = new GameDetails(
  gameDetailsContainer,
  xMark,
  detailsSection
);

async function loadGames(category) {
  try {
    console.log(category);
    const games = await gameService.getGames(category);
    gameList.render(games, async (gameId) => {
      const details = await gameService.getGameDetails(gameId);
      gameDetails.showDetails(details);
    });
  } catch (error) {
    console.error(error);
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active-nav"));
    item.classList.add("active-nav");
    loadGames(item.innerText.toLowerCase());
  });
});

loadGames("mmorpg");
