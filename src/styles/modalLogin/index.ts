import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";
import { AnimationSlideIn, AnimationSlideOut } from "../animations";

export const StyledBackgroundButton = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 2;
  background-color: ${Colors.grey};
  opacity: 0.7;
`;

export const StyledModalLoginDiv = styled.section<{ animationShow: boolean }>`
  width: 50%;
  padding: 1% 2%;
  height: 70%;
  position: fixed;
  border: 3px solid ${Colors.orange};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 4;
  ${(props) =>
    props.animationShow === true ? AnimationSlideIn : AnimationSlideOut};
  animation: ${(props) =>
    props.animationShow === true
      ? "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
      : "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"};
  border-radius: 5px;
  background-color: ${Colors.grey};
  box-shadow: 0px 0px 2px ${Colors.black};
`;

export const StyledGriddDiv = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const StyledCloseButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-stretch: expanded;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  background-color: ${Colors.black};
  border: 3px solid ${Colors.grey};
  color: ${Colors.white};
  transition-duration: 1s;
  width: 8vh;
  height: 8vh;
  margin: 2vh;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 6vh;
    height: 6vh;
  }
`;

export const StyledFormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  ${AnimationSlideIn}
  animation:  "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;";
  height: 60%;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

export const StyledInputPopUp = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vh;
  height: 3vh;
  padding: 0.5vh;
  font-family: "Poppins", sans-serif;
  font-size: ${Sizes.buttons.web};
  border-radius: 5px;
  border: 3px solid ${Colors.orange};
  background-color: ${Colors.white};
  margin-bottom: 2vh;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.black};
  }
  @media (max-width: 1024px) {
    width: 30vh;
    font-size: ${Sizes.buttons.responsive};
  }
`;

export const StyledTitlePopUp = styled.h5`
  display: flex;
  font-size: ${Sizes.Titles.web};
  color: ${Colors.black};
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  @media (max-width: 1024px) {
    font-size: ${Sizes.Titles.responsive};
  }
`;

export const StyledButtonChangePopUp = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-stretch: expanded;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  border: 3px solid ${Colors.grey};
  color: ${Colors.white};
  transition-duration: 1s;
  width: fit-content;
  height: 8vh;
  margin: 2vh;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    height: 6vh;
  }
`;
