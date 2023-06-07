import axios from "axios";
import { SearchGamesEnum } from "../enums/searchGames/enum";

async function UseGamesSearch(slug: string) {
  const KEY = process.env.REACT_APP_API_KEY;
  const slugToSearch = slug.split(" ").join("-").toLocaleLowerCase();
  const url = `https://api.rawg.io/api/games?search=${slugToSearch}?token&key=${KEY}`;
  const dataResonse = await axios.get(url).then((resp) => {
    const response: SearchGamesEnum = resp.data;
    return response;
  });

  return dataResonse;
}

export default UseGamesSearch;
