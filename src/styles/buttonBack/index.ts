import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export const StyledBackDiv = styled.nav`
  display: flex;
  position: fixed;
  top: 3vh;
  right: 3vh;
  z-index: 3;
`;

export const StyledButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;
  font-size: ${Sizes.buttons.web};
  width: 10vh;
  height: 10vh;
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.white};
  border: 3px solid ${Colors.orange};
  color: ${Colors.black};
  transition-duration: 1s;
  z-index: 2vh;
  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 8vh;
    height: 8vh;
  }
`;
