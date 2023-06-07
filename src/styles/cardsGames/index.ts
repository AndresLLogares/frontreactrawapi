import styled from "styled-components";
import { Sizes } from "../sizes";
import { Colors } from "../colors";

export const StyledcardsGames = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30vh;
  height: 50vh;
  border-radius: 5px;
  border: transparent;
  margin: 5vh;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  background-color: ${Colors.black};
  transition-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    width: 15vh;
    height: 25vh;
    margin: 3vh;
  }
`;

export const StyledFirstCardGames = styled.div<{
  imageBackground: string;
  filterLoaded: string;
}>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  transition-duration: 1s;
  position: relative;
  overflow: hidden;
  filter: ${(props) =>
    props.filterLoaded ? `${props.filterLoaded})` : "none"};
  &:hover {
    z-index: -1;
    opacity: 0;
  }
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

export const StyledDivSquareComponentGames = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: ${Colors.black};
`;

export const StyledTitleCardGames = styled.p`
  display: flex;
  font-family: "Poppins", sans-serif;
  color: ${Colors.orange};
  font-size: ${Sizes.description.web};
  font-weight: bold;
  text-align: center;
  margin: 1vh;
  @media (max-width: 1024px) {
    font-size: ${Sizes.description.responsive};
    margin: 1vh;
  }
`;

export const StyledTextCardGames = styled.p`
  display: flex;
  font-family: "Roboto Mono", monospace;
  color: ${Colors.grey};
  font-size: ${Sizes.description.web};
  text-align: center;
  margin: 1vh;
  @media (max-width: 1024px) {
    font-size: ${Sizes.description.responsive};
    margin: 0.5vh;
  }
`;

export const StyledSecondtCardGames = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition-duration: 1s;
  opacity: 0;
  &:hover {
    z-index: 1;
    opacity: 1;
  }
`;

export const StyledShowButtonGames = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${Colors.orange};
  font-family: "Roboto Mono", monospace;
  color: ${Colors.black};
  font-size: ${Sizes.buttons.web};
  border-radius: 5px;
  border: 3px solid ${Colors.black};
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
  }
`;
