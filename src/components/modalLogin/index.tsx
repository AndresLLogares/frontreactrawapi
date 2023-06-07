import React, { useState } from "react";
import {
  StyledBackgroundButton,
  StyledButtonChangePopUp,
  StyledCloseButton,
  StyledGriddDiv,
  StyledModalLoginDiv,
  StyledTitlePopUp,
} from "../../styles/modalLogin";
import { FaRegWindowClose } from "react-icons/fa";
import { StyledDivInput } from "../../styles/search";
import { Miscellaneous } from "../../enums/titles/enum";
import { FormLogin, FormSignup } from "../inputsLogin";

const useModalLogin = (): [JSX.Element, () => void] => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenModal = () => {
    setIsOpenState(!isOpenState);
  };
  const handleChangeLogin = () => {
    setIsLogin(!isLogin);
  };
  const ModalLogin = (
    <>
      {isOpenState ? (
        <>
          <StyledBackgroundButton> </StyledBackgroundButton>
          <StyledModalLoginDiv animationShow={isOpenState}>
            <StyledGriddDiv>
              <StyledDivInput direction="flex-end">
                <StyledCloseButton onClick={handleOpenModal}>
                  <FaRegWindowClose size={20} />
                </StyledCloseButton>
              </StyledDivInput>
              <StyledDivInput direction="center">
                <StyledTitlePopUp>
                  {isLogin ? Miscellaneous.Login : Miscellaneous.Signup}
                </StyledTitlePopUp>
              </StyledDivInput>
              {isLogin ? (
                <FormLogin handleOpenModal={handleOpenModal} />
              ) : (
                <FormSignup handleChangeLogin={handleChangeLogin} />
              )}
              <StyledButtonChangePopUp onClick={handleChangeLogin}>
                {isLogin
                  ? Miscellaneous.donNotHaveAccount
                  : Miscellaneous.doYouHave}
              </StyledButtonChangePopUp>
            </StyledGriddDiv>
          </StyledModalLoginDiv>
        </>
      ) : null}
    </>
  );

  return [ModalLogin, handleOpenModal];
};

export default useModalLogin;
