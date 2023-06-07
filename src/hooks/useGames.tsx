import axios from "axios";
import useSWRImmutable from "swr/immutable";

function UseGames(id: string | null) {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/games/${id}?token&key=${KEY}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);
  return {
    game: data,
    isLoading,
    isError: error,
  };
}

export default UseGames;
