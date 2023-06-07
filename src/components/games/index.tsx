import React, { useEffect, useState } from "react";
import { Games } from "../../enums/games/enum";
import UseGames from "../../hooks/useGames";
import {
  StyledDescription,
  StyledDivDescription,
  StyledDivDetails,
  StyledDivDetailsWithImage,
  StyledDivTitleDetails,
  StyledSubtitles,
  StyledTitleDetails,
} from "../../styles/details";
import { Loader } from "../../styles/loading";
import { BoxLoading } from "../../styles/main";
import ButtonBack from "../buttonBack";
import Layout from "../layout";
import { Miscellaneous } from "../../enums/titles/enum";
import DetailsGame from "../detailsGame";
import { Colors } from "../../styles/colors";
import { StyledHR } from "../../styles/aboutme";
import { ButtonFavorite } from "../buttonFavorite";

function Game() {
  let params = new URLSearchParams(document.location.search);
  let gameId = params.get("game");

  const { game, isLoading, isError } = UseGames(gameId);

  const [gamesData, setGamesData] = useState<Games>(game);
  useEffect(() => {
    setGamesData(game);
  }, [game]);

  const [loadedImage, setLoadedImage] = useState(false);

  const handleLoad = () => {
    setLoadedImage(true);
  };
  return (
    <Layout>
      {isLoading || isError ? (
        <BoxLoading>
          <Loader></Loader>
        </BoxLoading>
      ) : (
        <>
          <StyledDivDetails colorBackground={Colors.black}>
            <ButtonBack />
            <StyledDivTitleDetails>
              <StyledTitleDetails colorText={Colors.grey}>
                {gamesData?.name}
              </StyledTitleDetails>
            </StyledDivTitleDetails>
            <ButtonFavorite
              id={Number(gameId)}
              image={gamesData?.background_image}
              name={gamesData?.name_original}
            />
            <StyledDivDescription>
              <StyledSubtitles colorText={Colors.grey}>
                {Miscellaneous.description}
              </StyledSubtitles>
              <StyledDescription colorText={Colors.grey}>
                {gamesData?.description
                  .replaceAll(/<\/?[^>]+(>|$)/gi, "")
                  .replaceAll("&#39;", "'")}
              </StyledDescription>
            </StyledDivDescription>
          </StyledDivDetails>

          <StyledDivDetailsWithImage
            imageBackground={loadedImage ? gamesData?.background_image : ""}
            filterLoaded={loadedImage ? "" : "blur(20px)"}
          >
            <img
              src={gamesData?.background_image}
              alt=""
              onLoad={handleLoad}
              style={{ display: "none" }}
            />
            <StyledHR />
            <StyledDivDescription>
              <StyledSubtitles colorText={Colors.black}>
                {Miscellaneous.details}
              </StyledSubtitles>
              <DetailsGame
                originalName={gamesData?.name_original}
                metacritic={gamesData?.metacritic}
                released={gamesData?.released}
                rating={gamesData?.rating}
                ratingTop={gamesData?.rating_top}
                developers={gamesData?.developers}
                stores={gamesData?.stores}
                genres={gamesData?.genres}
                platforms={gamesData?.platforms}
                publishers={gamesData?.publishers}
                backImage={gamesData?.background_image}
                visit={gamesData?.website}
              />
            </StyledDivDescription>
          </StyledDivDetailsWithImage>
        </>
      )}
    </Layout>
  );
}

export default Game;
