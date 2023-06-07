import { useState } from "react";
import { Result } from "../../enums/genres/enum";
import { CardsEnum } from "../../enums/titles/enum";
import {
  StyledDivSquareComponent,
  StyledFirstCard,
  StyledGridCards,
  StyledSecondtCard,
  StyledShowButton,
  StyledTextCard,
  StyledTitleCard,
  Styledcards,
} from "../../styles/genres";
import { InView } from "react-intersection-observer";

const Cards: React.FC<CardsEnum> = ({ dataCards, handleClick }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <StyledGridCards>
      {dataCards?.map((item: Result) => (
        <InView as="div" key={item.id}>
          <Styledcards>
            <StyledFirstCard
              imageBackground={loaded ? item?.image_background : ""}
              filterLoaded={loaded ? "" : "blur(20px)"}
            >
              <img
                src={item?.image_background}
                alt=""
                onLoad={handleLoad}
                style={{ display: "none" }}
              />
              <StyledDivSquareComponent>
                <StyledTitleCard>{item?.name}</StyledTitleCard>
                <StyledTextCard>Games: {item?.games_count}</StyledTextCard>
              </StyledDivSquareComponent>
            </StyledFirstCard>
            <StyledSecondtCard>
              <StyledShowButton
                onClick={() => {
                  handleClick(item?.id);
                }}
              >
                Show More
              </StyledShowButton>
            </StyledSecondtCard>
          </Styledcards>
        </InView>
      ))}
    </StyledGridCards>
  );
};

export default Cards;
