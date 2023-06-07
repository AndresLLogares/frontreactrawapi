import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumProfileInformation } from "../../enums/redux";
import { getProfileInformationRequest } from "../../redux/reducers/userReducer";
import {
  StyledDivDescription,
  StyledList,
  StyledSubtitles,
} from "../../styles/details";
import { ProfileInformationEnum } from "../../enums/titles/enum";
import { InView } from "react-intersection-observer";
import {
  StyledDivSquareComponentGames,
  StyledFirstCardGames,
  StyledSecondtCardGames,
  StyledShowButtonGames,
  StyledTitleCardGames,
  StyledcardsGames,
} from "../../styles/cardsGames";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../styles/colors";

export const CardsProfile = () => {
  const [userFavorites, setUserFavorites] = useState<any>([]);

  const userProfile: EnumProfileInformation = useSelector(
    (state: any) => state?.userInformation?.userProfileInformation
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfileInformationRequest());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    userProfile?.favorites
      ? setUserFavorites(JSON.parse(userProfile.favorites))
      : null;
  }, [userProfile]);

  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  const handleClick = async (id: number) => {
    navigate(`/games?game=${id}`);
  };
  return (
    <>
      {userFavorites.length === 0 ? (
        <StyledDivDescription>
          <StyledSubtitles colorText={Colors.black}>
            {ProfileInformationEnum.NoFavorite}
          </StyledSubtitles>
        </StyledDivDescription>
      ) : (
        <StyledList>
          {userFavorites?.map(
            (game: { id: any; image: string; name: string }) => (
              <InView as="div" key={game.id}>
                <StyledcardsGames>
                  <StyledFirstCardGames
                    imageBackground={loaded ? game?.image : ""}
                    filterLoaded={loaded ? "" : "blur(20px)"}
                  >
                    <img
                      src={game?.image}
                      alt=""
                      onLoad={handleLoad}
                      style={{ display: "none" }}
                    />
                    <StyledDivSquareComponentGames>
                      <StyledTitleCardGames>{game?.name}</StyledTitleCardGames>
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
            )
          )}
        </StyledList>
      )}
    </>
  );
};
