import { useState } from "react";
import { CardsGamesEnum } from "../../enums/titles/enum";
import { StyledList } from "../../styles/details";
import { ResultLisOfGames } from "../../enums/listOfGames/enum";
import { InView } from "react-intersection-observer";
import {
  StyledDivSquareComponentGames,
  StyledFirstCardGames,
  StyledSecondtCardGames,
  StyledShowButtonGames,
  StyledTextCardGames,
  StyledTitleCardGames,
  StyledcardsGames,
} from "../../styles/cardsGames";

const CardsGames: React.FC<CardsGamesEnum> = ({ dataCards, handleClick }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <StyledList>
      {dataCards?.map((game: ResultLisOfGames) => (
        <InView as="div" key={game.id}>
          <StyledcardsGames>
            <StyledFirstCardGames
              imageBackground={loaded ? game?.background_image : ""}
              filterLoaded={loaded ? "" : "blur(20px)"}
            >
              <img
                src={game?.background_image}
                alt=""
                onLoad={handleLoad}
                style={{ display: "none" }}
              />
              <StyledDivSquareComponentGames>
                <StyledTitleCardGames>{game?.name}</StyledTitleCardGames>
                <StyledTextCardGames>
                  Released: {game?.released}
                </StyledTextCardGames>
                <StyledTextCardGames>
                  Rating: {game?.rating}
                </StyledTextCardGames>
              </StyledDivSquareComponentGames>
            </StyledFirstCardGames>
            <StyledSecondtCardGames>
              <StyledShowButtonGames
                onClick={() => {
                  handleClick(game?.id);
                }}
              >
                Show More
              </StyledShowButtonGames>
            </StyledSecondtCardGames>
          </StyledcardsGames>
        </InView>
      ))}
    </StyledList>
  );
};

export default CardsGames;
