import { useState } from "react";
import { StyledDivResponsiveButtons } from "../../styles/responsiveButtons";
import { StyledButtonsMain } from "../../styles/ButtonsMain";
import { FaRegListAlt, FaRegWindowClose } from "react-icons/fa";
import MenuResponsiveComponent from "./menu";

function ResponsiveButtons() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledDivResponsiveButtons>
      <StyledButtonsMain
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {!menuOpen ? (
          <FaRegListAlt size={20} />
        ) : (
          <FaRegWindowClose size={20} />
        )}
      </StyledButtonsMain>
      {menuOpen ? <MenuResponsiveComponent menuOpen={menuOpen} /> : null}
    </StyledDivResponsiveButtons>
  );
}

export default ResponsiveButtons;
