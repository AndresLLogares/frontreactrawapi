import styled from "styled-components";
import { Colors } from "../colors";
import { Miscellaneous } from "../../enums/titles/enum";
import { AnimationSlideIn } from "../animations";
import { Sizes } from "../sizes";

export const StyledDivDetails = styled.div<{
  colorBackground: string;
  marginTop?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  background-color: ${(props) =>
    props.colorBackground ? props.colorBackground : Colors.grey};
`;
export const StyledDivDetailsWithImage = styled.div<{
  imageBackground: string;
  filterLoaded: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  filter: ${(props) =>
    props.filterLoaded ? `${props.filterLoaded})` : "none"};
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: ${(props) =>
      props.imageBackground ? `url(${props.imageBackground})` : null};
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

export const StyledDivTitleDetails = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: relative;
`;

export const StyledTitleDetails = styled.h2<{ colorText: string }>`
  display: flex;
  font-size: ${Sizes.Titles.web};
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  color: ${(props) => (props.colorText ? props.colorText : Colors.black)};
  margin: 0;
  position: relative;
  @media (max-width: 1024px) {
    font-size: ${Sizes.Titles.responsive};
  }
`;

export const StyledDivDescription = styled.div`
  display: flex;
  text-align: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
  position: relative;
`;

export const StyledSubtitles = styled.h5<{ colorText: string }>`
  display: flex;
  font-size: ${Sizes.subTitles.web};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.colorText ? props.colorText : Colors.black)};
  margin: 0;
  margin-bottom: 2vh;
  position: relative;
  @media (max-width: 1024px) {
    font-size: ${Sizes.subTitles.responsive};
  }
`;

export const StyledDescription = styled.p<{ colorText: string }>`
  display: flex;
  font-size: ${Sizes.description.web};
  font-family: "Poppins", sans-serif;
  font-stretch: expanded;
  line-height: 1.2;
  position: relative;
  color: ${(props) => (props.colorText ? props.colorText : Colors.black)};
  margin: 0;
  margin-bottom: 2vh;
  width: 90%;
  @media (max-width: 1024px) {
    font-size: ${Sizes.description.responsive};
  }
`;

export const StyledTitlePage = styled.h2<{ colorText: string }>`
  display: flex;
  font-size: ${Sizes.subTitles.web};
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  color: ${(props) => (props.colorText ? props.colorText : Colors.black)};
  margin: 0;
  margin-bottom: 2vh;
  position: relative;
  @media (max-width: 1024px) {
    font-size: ${Sizes.subTitles.responsive};
  }
`;

export const StyledButtonPage = styled.button`
  display: flex;
  width: 10vh;
  height: 10vh;
  align-items: center;
  justify-content: center;
  border: 3px solid ${Colors.black};
  font-size: ${Sizes.buttons.web};
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  padding: 1vh;
  color: ${Colors.white};
  transition-duration: 1s;
  margin: 1vh;
  position: relative;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 7vh;
    height: 7vh;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
  position: relative;
  ${AnimationSlideIn};
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const StyledButtonList = styled.button<{ contentGame: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  border: 3px solid ${Colors.black};
  color: ${Colors.white};
  transition-duration: 1s;
  margin: 1vh;
  width: 50vh;
  height: 10vh;
  position: relative;
  &:after {
    content: "${(props) => (props.contentGame ? props.contentGame : "Game")}";
  }
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
    &:after {
      content: "${Miscellaneous.Showmore}";
    }
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 15vh;
    height: 15vh;
  }
`;
