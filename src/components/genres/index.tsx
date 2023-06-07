import Main from "../main";
import { Result } from "../../enums/genres/enum";
import UseGenres from "../../hooks/useGenre";
import { BoxCards, BoxLoading, TitleCard } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { StyledDivAbout, StyledHR } from "../../styles/aboutme";
import { ButtonsMainEnum, Miscellaneous } from "../../enums/titles/enum";
import { FaRegListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../search";
import Cards from "../cards";
function Genres() {
  const navigate = useNavigate();
  const { genres, isLoading, isError } = UseGenres();
  const [genresData, setGenresData] = useState<Result[]>(genres?.results);
  useEffect(() => {
    setGenresData(genres?.results);
  }, [genres]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = genresData.filter((posts: Result) => {
      if (event.target.value === "") return posts;
      return posts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (event.target.value.length === 0) {
      setGenresData(genres?.results);
      return;
    }
    setGenresData(results);
  };

  const handleClick = async (id: number) => {
    navigate(
      `/details?category=${ButtonsMainEnum.Genres.toLocaleLowerCase()}&id=${id}`
    );
  };
  return (
    <Main>
      {isLoading || isError ? (
        <BoxLoading>
          <Loader></Loader>
        </BoxLoading>
      ) : (
        <StyledDivAbout>
          <BoxCards>
            <TitleCard>
              <FaRegListAlt style={{ marginRight: 10 }} />
              {ButtonsMainEnum.Genres}
            </TitleCard>
          </BoxCards>
          <BoxCards>
            <Search
              handleSearch={handleSearch}
              placeholder={Miscellaneous.Action}
            />
          </BoxCards>

          <StyledHR />
          <Cards handleClick={handleClick} dataCards={genresData} />
        </StyledDivAbout>
      )}
    </Main>
  );
}

export default Genres;
