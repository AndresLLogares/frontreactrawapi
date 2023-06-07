import axios from "axios";
import useSWRImmutable from "swr/immutable";

function UsePlatforms() {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/platforms?token&key=${KEY}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);
  return {
    platforms: data,
    isLoading,
    isError: error,
  };
}

export default UsePlatforms;
