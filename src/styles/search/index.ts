import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 50%;
  height: fit-content;
`;

export const StyledDivInput = styled.section<{ direction: string }>`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: ${(props) =>
    props.direction ? props.direction : "flex-start"};
  flex-direction: row;
  margin: 3vh;
  width: 100%;
  height: 5vh;
  @media (max-width: 1024px) {
    margin: 2vh;
  }
`;

export const StyledAlert = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Sizes.buttons.web};
  font-family: "Poppins", sans-serif;
  padding: 0.5vh;
  width: fir-content;
  height: 6vh;
  margin-left: 2vh;
  background-color: transparent;
  color: ${Colors.orange};
  border: solid 3px ${Colors.orange};
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Sizes.buttons.web};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-right: 2vh;
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
  }
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vh;
  height: fit-content;
  padding: 0.5vh;
  font-family: "Poppins", sans-serif;
  font-size: ${Sizes.buttons.web};
  border-radius: 5px;
  border: 3px solid ${Colors.orange};
  background-color: ${Colors.white};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.black};
  }
  @media (max-width: 1024px) {
    width: 30vh;
    font-size: ${Sizes.buttons.responsive};
  }
`;

export const StyledSearchButton = styled.button`
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
  width: 12vh;
  height: 6vh;
  margin-left: 2vh;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 10vh;
    height: 4vh;
  }
`;

export const StyledLoginButton = styled.button`
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
  width: 22vh;
  height: 6vh;
  margin-right: 2vh;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: 16vh;
    height: 4vh;
  }
`;
