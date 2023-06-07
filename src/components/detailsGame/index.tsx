import { useNavigate } from "react-router-dom";
import { Developer, PlatformElement } from "../../enums/games/enum";
import {
  ButtonsMainEnum,
  DetailsGameEnum,
  DetailsGameEnumList,
} from "../../enums/titles/enum";
import {
  StyledDetailButton,
  StyledDivDetailsGame,
  StyledGridContactLinks,
  StyledLinkDetails,
  StyledTextDetailsGame,
  StyledfirstBoxDetailsGame,
} from "../../styles/detailsGame";
import { StyledHR } from "../../styles/aboutme";

const DetailsGame: React.FC<DetailsGameEnumList> = ({
  originalName,
  metacritic,
  released,
  ratingTop,
  visit,
  rating,
  developers,
  stores,
  platforms,
  genres,
  publishers,
}) => {
  const navigate = useNavigate();
  return (
    <StyledDivDetailsGame>
      <StyledfirstBoxDetailsGame>
        <StyledTextDetailsGame>
          {DetailsGameEnum.name_original} {originalName}
        </StyledTextDetailsGame>
        <StyledTextDetailsGame>
          {DetailsGameEnum.released} {released}
        </StyledTextDetailsGame>
        <StyledTextDetailsGame>
          {DetailsGameEnum.metacritic} {metacritic}
        </StyledTextDetailsGame>
        <StyledTextDetailsGame>
          {DetailsGameEnum.rating} {rating}
        </StyledTextDetailsGame>
        <StyledTextDetailsGame>
          {DetailsGameEnum.rating_top} {ratingTop}
        </StyledTextDetailsGame>
        <StyledHR />
        <StyledTextDetailsGame>
          {DetailsGameEnum.developers}
          <StyledGridContactLinks>
            {developers?.map((item: Developer) => (
              <StyledDetailButton
                key={item?.id}
                contentGame={item?.name}
                onClick={() =>
                  navigate(
                    `/details?category=${ButtonsMainEnum.Developers.toLocaleLowerCase()}&id=${
                      item?.id
                    }`
                  )
                }
              ></StyledDetailButton>
            ))}
          </StyledGridContactLinks>
        </StyledTextDetailsGame>
        <StyledHR />
        <StyledTextDetailsGame>
          {DetailsGameEnum.genres}
          <StyledGridContactLinks>
            {genres?.map((item: Developer) => (
              <StyledDetailButton
                key={item?.id}
                contentGame={item?.name}
                onClick={() =>
                  navigate(
                    `/details?category=${ButtonsMainEnum.Genres.toLocaleLowerCase()}&id=${
                      item?.id
                    }`
                  )
                }
              ></StyledDetailButton>
            ))}
          </StyledGridContactLinks>
        </StyledTextDetailsGame>

        <StyledHR />
        <StyledTextDetailsGame>
          {DetailsGameEnum.platforms}
          <StyledGridContactLinks>
            {platforms?.map((item: PlatformElement) => (
              <StyledDetailButton
                key={item?.platform?.id}
                contentGame={item?.platform?.name}
                onClick={() =>
                  navigate(
                    `/details?category=${ButtonsMainEnum.Platforms.toLocaleLowerCase()}&id=${
                      item?.platform?.id
                    }`
                  )
                }
              ></StyledDetailButton>
            ))}
          </StyledGridContactLinks>
        </StyledTextDetailsGame>
        <StyledHR />

        <StyledTextDetailsGame>
          {DetailsGameEnum.publishers}
          <StyledGridContactLinks>
            {publishers?.map((item: Developer) => (
              <StyledDetailButton
                key={item?.id}
                contentGame={item?.name}
                onClick={() =>
                  navigate(
                    `/details?category=${ButtonsMainEnum.Publishers.toLocaleLowerCase()}&id=${
                      item?.id
                    }`
                  )
                }
              ></StyledDetailButton>
            ))}
          </StyledGridContactLinks>
        </StyledTextDetailsGame>
        <StyledHR />
        <StyledLinkDetails rel="noreferrer" target="_blank" href={visit}>
          {DetailsGameEnum.visit}
        </StyledLinkDetails>
      </StyledfirstBoxDetailsGame>
    </StyledDivDetailsGame>
  );
};

export default DetailsGame;
