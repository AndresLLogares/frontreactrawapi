import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export const BoxMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: ${Colors.grey};
  overflow: hidden;
`;

export const BoxWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.black};
  height: fit-content;
`;

export const BoxLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25vh;
`;
export const TitleMain = styled.h3`
  display: flex;
  text-align: center;
  font-size: ${Sizes.Titles.web};
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  color: ${Colors.grey};
  margin: 5vh;
  padding: 0;
  @media (max-width: 1024px) {
    font-size: ${Sizes.Titles.responsive};
    margin: 3vh;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
`;

export const TitleCard = styled.h5`
  display: flex;
  font-size: ${Sizes.subTitles.web};
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  color: ${Colors.black};
  margin: 3vh;
  padding: 0;
  @media (max-width: 1024px) {
    font-size: ${Sizes.subTitles.responsive};
    margin: 2vh;
  }
`;
