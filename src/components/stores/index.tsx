import Main from "../main";
import { Result } from "../../enums/stores/enum";
import { BoxCards, BoxLoading, TitleCard } from "../../styles/main";
import { Loader } from "../../styles/loading";
import { StyledDivAbout, StyledHR } from "../../styles/aboutme";
import { ButtonsMainEnum, Miscellaneous } from "../../enums/titles/enum";
import { FaRegListAlt } from "react-icons/fa";
import UseStores from "../../hooks/useStore";
import Search from "../search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../cards";
function Stores() {
  const navigate = useNavigate();
  const { stores, isLoading, isError } = UseStores();
  const [storesData, setStoresData] = useState<Result[]>(stores?.results);
  useEffect(() => {
    setStoresData(stores?.results);
  }, [stores]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const results = storesData.filter((posts: Result) => {
      if (event.target.value === "") return posts;
      return posts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (event.target.value.length === 0) {
      setStoresData(stores?.results);
      return;
    }
    setStoresData(results);
  };
  const handleClick = async (id: number) => {
    navigate(
      `/details?category=${ButtonsMainEnum.Stores.toLocaleLowerCase()}&id=${id}`
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
              {ButtonsMainEnum.Stores}
            </TitleCard>
          </BoxCards>
          <BoxCards>
            <Search
              handleSearch={handleSearch}
              placeholder={Miscellaneous.Steam}
            />
          </BoxCards>

          <StyledHR />
          <Cards handleClick={handleClick} dataCards={storesData} />
        </StyledDivAbout>
      )}
    </Main>
  );
}

export default Stores;
