import styled from "styled-components";
import { Colors } from "../colors";
import { Miscellaneous } from "../../enums/titles/enum";
import { Sizes } from "../sizes";

export const StyledDivDetailsGame = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;
  margin-bottom: 2vh;
  margin-top: 2vh;
  width: 100%;
`;

export const StyledfirstBoxDetailsGame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 3vh;
  width: 90%;
  background-color: ${Colors.black};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 5vh;
`;
export const StyledTextDetailsGame = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${Sizes.description.web};
  align-items: center;
  justify-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-stretch: expanded;
  font-weight: bold;
  line-height: 1.2;
  color: ${Colors.grey};
  margin: 0;
  margin-bottom: 3vh;
  width: 90%;
  @media (max-width: 1024px) {
    font-size: ${Sizes.description.responsive};
  }
`;

export const StyledLinkDetails = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-stretch: expanded;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  border: 3px solid ${Colors.grey};
  color: ${Colors.white};
  transition-duration: 1s;
  margin-bottom: 1vh;
  width: 12vh;
  height: 6vh;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 12vh;
    height: 6vh;
  }
`;
export const StyledGridContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: fit-content;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const StyledDetailButton = styled.button<{ contentGame: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-stretch: expanded;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  border: 3px solid ${Colors.grey};
  color: ${Colors.white};
  transition-duration: 1s;
  margin: 1vh;
  width: 25vh;
  height: 10vh;
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
    width: 14vh;
    height: 7vh;
  }
`;

export const StyledDivArrayDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0.5vh;
`;
