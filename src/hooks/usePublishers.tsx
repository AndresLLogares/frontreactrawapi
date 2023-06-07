import axios from "axios";
import useSWRImmutable from "swr/immutable";

function UsePublishers() {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/publishers?token&key=${KEY}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);
  return {
    publishers: data,
    isLoading,
    isError: error,
  };
}

export default UsePublishers;
