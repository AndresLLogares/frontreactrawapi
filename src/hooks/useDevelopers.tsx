import axios from "axios";
import useSWRImmutable from "swr/immutable";

function UseDevelopers() {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/developers?token&key=${KEY}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);
  return {
    developers: data,
    isLoading,
    isError: error,
  };
}

export default UseDevelopers;
