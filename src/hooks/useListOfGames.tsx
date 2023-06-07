import axios from "axios";
import useSWR from "swr";

function UseListOfGames(
  category: string | null,
  id: string | null,
  page: number
) {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/games?token&key=${KEY}&${category}=${id}&page=${page}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    listOfGames: data,
    isLoading,
    isError: error,
  };
}

export default UseListOfGames;
