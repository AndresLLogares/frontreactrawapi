import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainTitles, Miscellaneous } from "../../enums/titles/enum";
import { BoxWrapper, TitleMain } from "../../styles/main";
import Layout from "../layout";
import NavBar from "../navbar";
import { Colors } from "../../styles/colors";
import {
  StyledDivDetails,
  StyledTitleDetails,
  StyledTitlePage,
} from "../../styles/details";
import { useEffect, useState } from "react";
import CardsGames from "../cardsGames";
import { ResultLisOfGames } from "../../enums/listOfGames/enum";
import { StyledHR } from "../../styles/aboutme";
import ButtonBack from "../buttonBack";

const GamesSearched = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [detailsData, setDetailsData] = useState<ResultLisOfGames[] | []>([]);

  useEffect(() => {
    setDetailsData(location?.state?.listOfGames.results);
  }, [location]);

  const handleClick = async (id: number) => {
    navigate(`/games?game=${id}`);
  };

  return (
    <Layout>
      <BoxWrapper>
        <TitleMain>{MainTitles.TitlesMain}</TitleMain>
      </BoxWrapper>
      <NavBar />
      <ButtonBack />
      <StyledDivDetails colorBackground={Colors.grey}>
        <StyledHR />
        <StyledTitlePage colorText={Colors.black}>
          {Miscellaneous.ResultsSearch}
        </StyledTitlePage>
        <StyledTitleDetails colorText={Colors.grey}>
          {Miscellaneous.ResultsSearch}
        </StyledTitleDetails>
        <CardsGames dataCards={detailsData} handleClick={handleClick} />
      </StyledDivDetails>
    </Layout>
  );
};

export default GamesSearched;
