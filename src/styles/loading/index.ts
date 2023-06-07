import styled from "styled-components";
import { AnimationLoader } from "../animations";
import { Colors } from "../colors";

export const Loader = styled.span`
  width: 148px;
  height: 148px;
  border: 5px solid;
  border-color: ${Colors.orange} transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${AnimationLoader} 1s linear infinite;
  @media (max-width: 1024px) {
  }
`;
