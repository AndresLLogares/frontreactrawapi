import { Miscellaneous } from "../../enums/titles/enum";
import { StyledDivInput, StyledInput, StyledLabel } from "../../styles/search";

function Search(props: any) {
  return (
    <StyledDivInput direction="flex-start">
      <StyledLabel>{Miscellaneous.Search}</StyledLabel>
      <StyledInput
        onChange={(e) => {
          props?.handleSearch(e);
        }}
        placeholder={props?.placeholder}
      />
    </StyledDivInput>
  );
}

export default Search;
