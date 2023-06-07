import axios from "axios";
import useSWR from "swr";

function UseDetails(page: string | null, id: string | null) {
  const KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.rawg.io/api/${page}/${id}?token&key=${KEY}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    details: data,
    isLoading,
    isError: error,
  };
}

export default UseDetails;
