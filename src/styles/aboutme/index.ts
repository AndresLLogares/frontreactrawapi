import styled from "styled-components";
import { Colors } from "../colors";
import { AnimationSlideIn } from "../animations";
import { Sizes } from "../sizes";

export const StyledDivAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 5vh;
`;

export const StyledDivAboutTitle = styled.div`
  display: flex;
  width: 80%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const StyledAboutTitle = styled.h3`
  display: flex;
  font-size: ${Sizes.subTitles.web};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5vh;
  @media (max-width: 1024px) {
    font-size: ${Sizes.subTitles.responsive};
    margin-bottom: 3vh;
  }
`;

export const StyledGridContact = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  width: 40%;
  ${AnimationSlideIn};
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const StyledIcons = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15vh;
  height: 15vh;
  border-radius: 5px;
  border: transparent;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: ${Sizes.buttons.web};
  margin: 5vh;
  background-color: ${Colors.black};
  color: ${Colors.grey};
  transition-duration: 1s;
  transiton-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    width: 12vh;
    height: 12vh;
    font-size: ${Sizes.buttons.responsive};
    margin: 3vh;
  }
`;

export const StyledHR = styled.hr`
  width: 100%;
  height: 0.5vh;
  background-color: ${Colors.orange};
  border: transparent;
  margin: 0;
  margin-bottom: 2vh;
`;
