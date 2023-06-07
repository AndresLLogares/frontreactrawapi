import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export const ContainerProfile = styled.section`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: fit-content;
  margin-bottom: 5vh;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: fit-content;
`;

export const StyledButtonFavorite = styled.button`
  display: flex;
  width: fit-content;
  height: 5vh;
  align-items: center;
  justify-content: center;
  border: 3px solid ${Colors.grey};
  font-size: ${Sizes.buttons.web};
  font-family: "Poppins", sans-serif;
  background-color: ${Colors.black};
  padding: 1vh;
  color: ${Colors.grey};
  transition-duration: 1s;
  margin: 1vh;
  margin-bottom: 5vh;
  position: relative;
  &:hover {
    border: 3px solid ${Colors.black};
    background-color: ${Colors.grey};
    color: ${Colors.black};
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
    width: fit-content;
    height: 7vh;
  }
`;
