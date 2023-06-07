import styled from "styled-components";
import { Colors } from "../colors";
import { Sizes } from "../sizes";
import { AnimationSlideIn, AnimationSlideOut } from "../animations";

export const StyledDivResponsiveButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const StyledListResponsiveButtons = styled.nav<{
  animationShow: boolean;
}>`
  display: flex;
  position: absolute;
  left: 0;
  background-color: ${Colors.black};
  border: 3px solid ${Colors.orange};
  width: 25%;
  height: fit-content;
  font-size: ${Sizes.buttons.web};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.animationShow === true ? AnimationSlideIn : AnimationSlideOut};
  animation: ${(props) =>
    props.animationShow === true
      ? "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
      : "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"};
  z-index: 3;
  @media (max-width: 1024px) {
    font-size: ${Sizes.buttons.responsive};
  }
`;

export const StyledResponsiveButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  background-color: ${Colors.black};
  color: ${Colors.grey};
  width: 100%;
  height: 3vh;
  padding: 2vh;
  transition: 2s linear;
  &:hover {
    background-color: ${Colors.orange};
    color: ${Colors.black};
    cursor: pointer;
  }
`;
