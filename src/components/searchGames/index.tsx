import { useRef, useState } from "react";
import { AlertMessage, Miscellaneous } from "../../enums/titles/enum";
import {
  StyledAlert,
  StyledDivInput,
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from "../../styles/search";
import UseGamesSearch from "../../hooks/useSearchGames";
import { SearchGamesEnum } from "../../enums/searchGames/enum";
import { useNavigate } from "react-router-dom";

function SearchGames() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const currentSearchInput = useRef("");
  const currentGame = useRef<SearchGamesEnum | []>([]);

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.length === 0) {
      setAlertMessage(AlertMessage.Empty);
      return;
    } else if (searchInput.length < 3) {
      setAlertMessage(AlertMessage.Invalid);
      return;
    }
    if (currentSearchInput.current === searchInput) {
      return;
    }
    currentSearchInput.current = searchInput;
    setAlertMessage("");
    const game = await UseGamesSearch(searchInput);
    setSearchInput("");
    if (!game || game?.results.length === 0) {
      setAlertMessage(AlertMessage.NotFound);
      return;
    }
    currentGame.current = game;
    return navigate("/search", { state: { listOfGames: currentGame.current } });
  };

  return (
    <StyledForm onSubmit={handleSubmitSearch}>
      <StyledDivInput direction="flex-start">
        <StyledInput
          onChange={(e) => {
            handleSearchInput(e);
          }}
          placeholder={Miscellaneous.SearchGames}
          value={searchInput}
        />
        <StyledSearchButton type="submit">
          {Miscellaneous.Search}
        </StyledSearchButton>
        {alertMessage.length > 0 ? (
          <StyledAlert>{alertMessage}</StyledAlert>
        ) : null}
      </StyledDivInput>
    </StyledForm>
  );
}

export default SearchGames;
