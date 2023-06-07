import Main from "../main";
import { Result } from "../../enums/publishers/enum";
import { BoxCards, BoxLoading, TitleCard } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { StyledDivAbout, StyledHR } from "../../styles/aboutme";
import { ButtonsMainEnum, Miscellaneous } from "../../enums/titles/enum";
import { FaRegListAlt } from "react-icons/fa";
import UsePublishers from "../../hooks/usePublishers";
import { useEffect, useState } from "react";
import Search from "../search";
import { useNavigate } from "react-router-dom";
import Cards from "../cards";
function Publishers() {
  const navigate = useNavigate();
  const { publishers, isLoading, isError } = UsePublishers();
  const [publishersData, setPublishersData] = useState<Result[]>(
    publishers?.results
  );
  useEffect(() => {
    setPublishersData(publishers?.results);
  }, [publishers]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = publishersData.filter((posts: Result) => {
      if (event.target.value === "") return posts;
      return posts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (event.target.value.length === 0) {
      setPublishersData(publishers?.results);
      return;
    }
    setPublishersData(results);
  };

  const handleClick = async (id: number) => {
    navigate(
      `/details?category=${ButtonsMainEnum.Publishers.toLocaleLowerCase()}&id=${id}`
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
              {ButtonsMainEnum.Publishers}
            </TitleCard>
          </BoxCards>
          <BoxCards>
            <Search
              handleSearch={handleSearch}
              placeholder={Miscellaneous.Valve}
            />
          </BoxCards>
          <StyledHR />
          <Cards handleClick={handleClick} dataCards={publishersData} />
        </StyledDivAbout>
      )}
    </Main>
  );
}

export default Publishers;
