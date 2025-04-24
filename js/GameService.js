export class GameService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.host = "free-to-play-games-database.p.rapidapi.com";
  }

  async getGames(category) {
    const url = `https://${this.host}/api/games?category=${category}`;
    const data = await this.fetchData(url);
    return data;
  }

  async getGameDetails(gameId) {
    const url = `https://${this.host}/api/game?id=${gameId}`;
    const data = await this.fetchData(url);
    console.log(data);
    return data;
  }

  async fetchData(url) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.host,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("API request failed");
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  }
}
