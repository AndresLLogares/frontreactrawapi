import React from "react";
import Main from "../main";
import { Result } from "../../enums/genres/enum";
import { BoxCards, BoxLoading, TitleCard } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { StyledDivAbout, StyledHR } from "../../styles/aboutme";
import { ButtonsMainEnum, Miscellaneous } from "../../enums/titles/enum";
import { FaRegListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../search";
import UseDevelopers from "../../hooks/useDevelopers";
import Cards from "../cards";

function Developers() {
  const navigate = useNavigate();
  const { developers, isLoading, isError } = UseDevelopers();
  const [developerssData, setDevelopersData] = useState<Result[]>(
    developers?.results
  );
  useEffect(() => {
    setDevelopersData(developers?.results);
  }, [developers]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = developerssData.filter((posts: Result) => {
      if (event.target.value === "") return posts;
      return posts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (event.target.value.length === 0) {
      setDevelopersData(developers?.results);
      return;
    }
    setDevelopersData(results);
  };

  const handleClick = async (id: number) => {
    navigate(
      `/details?category=${ButtonsMainEnum.Developers.toLocaleLowerCase()}&id=${id}`
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
              {ButtonsMainEnum.Developers}
            </TitleCard>
          </BoxCards>
          <BoxCards>
            <Search
              handleSearch={handleSearch}
              placeholder={Miscellaneous.Ubisoft}
            />
          </BoxCards>

          <StyledHR />
          <Cards handleClick={handleClick} dataCards={developerssData} />
        </StyledDivAbout>
      )}
    </Main>
  );
}

export default Developers;
