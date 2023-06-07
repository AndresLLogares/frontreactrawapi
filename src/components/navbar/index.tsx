import { StyledDivNavbar } from "../../styles/ButtonsMain";
import ButtonLogin from "../buttonLogin";
import SearchGames from "../searchGames";

function NavBar() {
  return (
    <StyledDivNavbar>
      <SearchGames />
      <ButtonLogin />
    </StyledDivNavbar>
  );
}

export default NavBar;
