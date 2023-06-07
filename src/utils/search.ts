import { Result } from "../enums/genres/enum";

export const handleSearch = (
  event: any,
  data: Array<any>,
  setData: React.Dispatch<any>,
  currentState: any
) => {
  const results = data?.filter((posts: Result) => {
    if (event.target.value === "") return posts;
    return posts.name.toLowerCase().includes(event.target.value.toLowerCase());
  });
  if (event.target.value.length === 0) {
    setData(currentState?.results);
    return;
  }
  setData(results);
};
