import {
  StyledButtonsMain,
  StyledDivButtons,
  StyledTextButton,
} from "../../styles/ButtonsMain";
import { ButtonsMainEnum } from "../../enums/titles/enum";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useSize";
import { useEffect, useState } from "react";
import ResponsiveButtons from "../responsiveButtons";
function ButtonsMain() {
  const navigate = useNavigate();
  const currentSize = useWindowSize();
  const [size, setSize] = useState(currentSize);
  useEffect(() => {
    setSize(currentSize);
  }, [currentSize, size]);
  return (
    <StyledDivButtons>
      {size.width > 1024 ? (
        <>
          <StyledButtonsMain onClick={() => navigate("/genres")}>
            <StyledTextButton>{ButtonsMainEnum.Genres}</StyledTextButton>
          </StyledButtonsMain>
          <StyledButtonsMain onClick={() => navigate("/platforms")}>
            <StyledTextButton>{ButtonsMainEnum.Platforms}</StyledTextButton>
          </StyledButtonsMain>
          <StyledButtonsMain onClick={() => navigate("/publishers")}>
            <StyledTextButton>{ButtonsMainEnum.Publishers}</StyledTextButton>
          </StyledButtonsMain>
          <StyledButtonsMain onClick={() => navigate("/stores")}>
            <StyledTextButton>{ButtonsMainEnum.Stores}</StyledTextButton>
          </StyledButtonsMain>
          <StyledButtonsMain onClick={() => navigate("/developers")}>
            <StyledTextButton>{ButtonsMainEnum.Developers}</StyledTextButton>
          </StyledButtonsMain>
          <StyledButtonsMain onClick={() => navigate("/")}>
            <StyledTextButton>{ButtonsMainEnum.AboutMe}</StyledTextButton>
          </StyledButtonsMain>
        </>
      ) : (
        <ResponsiveButtons />
      )}
    </StyledDivButtons>
  );
}

export default ButtonsMain;
