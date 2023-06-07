import { useNavigate } from "react-router-dom";
import { ButtonsMainEnum, Menu } from "../../enums/titles/enum";
import {
  StyledListResponsiveButtons,
  StyledResponsiveButtons,
} from "../../styles/responsiveButtons";

const MenuResponsiveComponent: React.FC<Menu> = ({ menuOpen }) => {
  const navigate = useNavigate();
  return (
    <StyledListResponsiveButtons animationShow={menuOpen}>
      <StyledResponsiveButtons onClick={() => navigate("/genres")}>
        {ButtonsMainEnum.Genres}
      </StyledResponsiveButtons>
      <StyledResponsiveButtons onClick={() => navigate("/platforms")}>
        {ButtonsMainEnum.Platforms}
      </StyledResponsiveButtons>
      <StyledResponsiveButtons onClick={() => navigate("/publishers")}>
        {ButtonsMainEnum.Publishers}
      </StyledResponsiveButtons>
      <StyledResponsiveButtons onClick={() => navigate("/stores")}>
        {ButtonsMainEnum.Stores}
      </StyledResponsiveButtons>
      <StyledResponsiveButtons onClick={() => navigate("/developers")}>
        {ButtonsMainEnum.Developers}
      </StyledResponsiveButtons>
      <StyledResponsiveButtons onClick={() => navigate("/")}>
        {ButtonsMainEnum.AboutMe}
      </StyledResponsiveButtons>
    </StyledListResponsiveButtons>
  );
};

export default MenuResponsiveComponent;
