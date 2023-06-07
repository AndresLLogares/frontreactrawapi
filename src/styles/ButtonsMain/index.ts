import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export const StyledDivButtons = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
  background-color: ${Colors.orange};
  border-top: 3px solid ${Colors.orange};
  border-bottom: 3px solid ${Colors.orange};
  @media (max-width: 1024px) {
    height: 7vh;
    background-color: ${Colors.black};
  }
`;

export const StyledDivNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100%;
  padding: 2vh;
  background-color: ${Colors.black};
  border-top: 3px solid ${Colors.orange};
  @media (max-width: 1024px) {
    height: 3vh;
    background-color: ${Colors.black};
  }
`;

export const StyledButtonsMain = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  background-color: ${Colors.black};
  color: ${Colors.grey};
  border: transparent;
  transition: 2s linear;
  &:hover {
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
`;

export const StyledTextButton = styled.p`
  display: flex;
  font-size: ${Sizes.subTitles.web};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  @media (max-width: 1024px) {
    font-size: ${Sizes.subTitles.responsive};
  }
`;
