import Main from "../main";
import { Result } from "../../enums/platforms/enum";
import { BoxCards, BoxLoading, TitleCard } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { StyledDivAbout, StyledHR } from "../../styles/aboutme";
import { ButtonsMainEnum, Miscellaneous } from "../../enums/titles/enum";
import { FaRegListAlt } from "react-icons/fa";
import UsePlatforms from "../../hooks/usePlatfroms";
import { useEffect, useState } from "react";
import Search from "../search";
import { useNavigate } from "react-router-dom";
import Cards from "../cards";
function Platforms() {
  const navigate = useNavigate();
  const { platforms, isLoading, isError } = UsePlatforms();
  const [platformsData, setPlatformsData] = useState<Result[]>(
    platforms?.results
  );
  useEffect(() => {
    setPlatformsData(platforms?.results);
  }, [platforms]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = platformsData.filter((posts: Result) => {
      if (event.target.value === "") return posts;
      return posts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (event.target.value.length === 0) {
      setPlatformsData(platforms?.results);
      return;
    }
    setPlatformsData(results);
  };
  const handleClick = async (id: number) => {
    navigate(
      `/details?category=${ButtonsMainEnum.Platforms.toLocaleLowerCase()}&id=${id}`
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
              {ButtonsMainEnum.Platforms}
            </TitleCard>
          </BoxCards>
          <BoxCards>
            <Search
              handleSearch={handleSearch}
              placeholder={Miscellaneous.PC}
            />
          </BoxCards>

          <StyledHR />
          <Cards handleClick={handleClick} dataCards={platformsData} />
        </StyledDivAbout>
      )}
    </Main>
  );
}

export default Platforms;
