import { useEffect, useState } from "react";
import UseDetails from "../../hooks/useDetails";
import Layout from "../layout";
import UseListOfGames from "../../hooks/useListOfGames";
import { BoxLoading } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { ResultLisOfGames } from "../../enums/listOfGames/enum";
import { DetailsEnum } from "../../enums/details/enum";
import {
  StyledButtonPage,
  StyledDescription,
  StyledDivDescription,
  StyledDivDetails,
  StyledDivDetailsWithImage,
  StyledDivTitleDetails,
  StyledSubtitles,
  StyledTitleDetails,
  StyledTitlePage,
} from "../../styles/details";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { StyledGridCards } from "../../styles/genres";
import ButtonBack from "../buttonBack";
import { handleNextPage, PaginateFunctions } from "../../utils/paginate";
import { useNavigate } from "react-router-dom";
import { Miscellaneous } from "../../enums/titles/enum";
import { StyledHR } from "../../styles/aboutme";
import { Colors } from "../../styles/colors";
import CardsGames from "../cardsGames";

function Details() {
  let params = new URLSearchParams(document.location.search);
  let category = params.get("category");
  let id = params.get("id");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPage, setLoadingPage] = useState(true);
  const { details, isLoading, isError } = UseDetails(category, id);
  const { listOfGames } = UseListOfGames(category, id, currentPage);
  const [gamesData, setGamesData] = useState<ResultLisOfGames[]>(
    listOfGames?.results
  );
  const [detailsData, setDetailsData] = useState<DetailsEnum>(details);
  const [pageArray, setPageArray] = useState<any>([]);
  const [pageData, setPageData] = useState(0);
  const [currentPaginate, setCurrentPaginate] = useState(1);
  const [pageToShow, setPageToShow] = useState<any>([]);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [loadedImage, setLoadedImage] = useState(false);

  useEffect(() => {
    setGamesData(listOfGames?.results);
  }, [listOfGames]);

  useEffect(() => {
    setDetailsData(details);
    setNumberOfGames(details?.games_count);
  }, [details]);

  useEffect(() => {
    const funtionPage = async () => {
      if (numberOfGames !== 0) {
        await PaginateFunctions(
          numberOfGames,
          setPageArray,
          setPageData,
          setPageToShow
        );
      }
    };
    funtionPage();
  }, [numberOfGames]);

  useEffect(() => {
    !gamesData ? setLoadingPage(true) : setLoadingPage(false);
  }, [gamesData, listOfGames]);
  const handlePage = (page: number) => {
    setCurrentPage(page);
    return;
  };

  const handleLoad = () => {
    setLoadedImage(true);
  };
  const handleClick = async (id: number) => {
    navigate(`/games?game=${id}`);
  };
  return (
    <Layout>
      {isLoading || isError ? (
        <BoxLoading>
          <Loader></Loader>
        </BoxLoading>
      ) : (
        <StyledDivDetails colorBackground={Colors.black}>
          <ButtonBack />
          <StyledDivTitleDetails>
            <StyledTitleDetails colorText={Colors.grey}>
              {detailsData?.name}
            </StyledTitleDetails>
          </StyledDivTitleDetails>
          <StyledDivDescription>
            <StyledSubtitles colorText={Colors.grey}>
              {Miscellaneous.description}
            </StyledSubtitles>
            <StyledDescription colorText={Colors.grey}>
              {detailsData?.description
                ? detailsData?.description
                    .replaceAll(/<\/?[^>]+(>|$)/gi, "")
                    .replaceAll("&#39;", "'")
                : Miscellaneous.noDescription}
            </StyledDescription>
          </StyledDivDescription>
        </StyledDivDetails>
      )}
      {loadingPage ? (
        <BoxLoading>
          <Loader></Loader>
        </BoxLoading>
      ) : (
        <StyledDivDetailsWithImage
          imageBackground={loadedImage ? detailsData?.image_background : ""}
          filterLoaded={loadedImage ? "" : "blur(20px)"}
        >
          <img
            src={detailsData?.image_background}
            alt=""
            onLoad={handleLoad}
            style={{ display: "none" }}
          />
          <StyledHR />
          <StyledDivDescription>
            <StyledTitlePage colorText={Colors.black}>
              {Miscellaneous.listOfGames}
            </StyledTitlePage>
            <StyledTitlePage colorText={Colors.black}>
              {Miscellaneous.page} {currentPage}
            </StyledTitlePage>
          </StyledDivDescription>
          <StyledGridCards>
            {currentPaginate === 1 ? null : (
              <StyledButtonPage
                disabled={loadingPage}
                onClick={() =>
                  handleNextPage(
                    false,
                    currentPaginate,
                    pageData,
                    pageToShow,
                    setPageToShow,
                    setCurrentPaginate,
                    pageArray
                  )
                }
              >
                <FaArrowAltCircleLeft size={30} />
              </StyledButtonPage>
            )}
            {pageToShow.map((page: any) => (
              <div key={page}>
                <StyledButtonPage onClick={() => handlePage(page)}>
                  {page}
                </StyledButtonPage>
              </div>
            ))}
            {currentPaginate !== pageData ? (
              <StyledButtonPage
                disabled={loadingPage}
                onClick={() =>
                  handleNextPage(
                    true,
                    currentPaginate,
                    pageData,
                    pageToShow,
                    setPageToShow,
                    setCurrentPaginate,
                    pageArray
                  )
                }
              >
                <FaArrowAltCircleRight size={30} />
              </StyledButtonPage>
            ) : null}
          </StyledGridCards>
          <CardsGames dataCards={gamesData} handleClick={handleClick} />
        </StyledDivDetailsWithImage>
      )}
    </Layout>
  );
}

export default Details;
