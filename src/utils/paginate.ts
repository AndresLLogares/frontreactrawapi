export const PaginateFunctions = async (
  numberOfGames: number,
  setPageArray: React.Dispatch<any>,
  setPageData: React.Dispatch<any>,
  setPageToShow: React.Dispatch<any>
) => {
  let numberOfPages = await Math.ceil(numberOfGames / 20);
  let auxArray = await Array.from({ length: numberOfPages }, (v, i) => i + 1);
  if (auxArray.length > 0) {
    await setPageArray(auxArray);
    let max = await Math.max(...auxArray);
    let round = await Math.ceil(max / 10);
    await setPageData(round === 0 ? 1 : round);
    await setPageToShow(
      auxArray.slice(0, numberOfPages <= 10 ? numberOfPages : 10)
    );
  }
};

export const handleNextPage = async (
  isNext: boolean,
  currentPaginate: number,
  pageData: number,
  pageToShow: Array<number>,
  setPageToShow: React.Dispatch<any>,
  setCurrentPaginate: React.Dispatch<any>,
  pageArray: Array<number>
) => {
  let auxPaginate = isNext ? currentPaginate + 1 : currentPaginate - 1;
  if (isNext && auxPaginate < pageData) {
    let auxArray = await pageToShow.map((page: number) => {
      return page + 10;
    });
    setPageToShow(auxArray);
    setCurrentPaginate(auxPaginate);
    return;
  } else if (isNext && auxPaginate === pageData) {
    let auxArray = pageArray.slice(pageArray.length - 10, pageArray.length - 1);
    setPageToShow(auxArray);
    setCurrentPaginate(auxPaginate);
    return;
  } else if (!isNext && auxPaginate !== 0) {
    let auxArray = await pageToShow.map((page: number) => {
      return page - 10;
    });
    auxArray = auxArray.some((v: number) => v < 0)
      ? pageArray.slice(0, 10)
      : auxArray;
    setPageToShow(auxArray);
    setCurrentPaginate(auxPaginate);
    return;
  }
  return;
};
