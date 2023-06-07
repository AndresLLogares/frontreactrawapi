import { useEffect } from "react";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { Miscellaneous } from "../../enums/titles/enum";
import { StyledDivInput, StyledLoginButton } from "../../styles/search";
import useModalLogin from "../modalLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasiceInformationRequest } from "../../redux/reducers/userReducer";
import { EnumBasicInformation } from "../../enums/redux";

function ButtonLogin() {
  const [ModalLogin, handleOpenModal] = useModalLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userBasicInformation: EnumBasicInformation = useSelector(
    (state: any) => state?.userInformation?.userBasicInformation
  );
  useEffect(() => {
    dispatch(getBasiceInformationRequest());
  }, []);

  return (
    <StyledDivInput direction="flex-end">
      {ModalLogin}
      {userBasicInformation?.JWT ? (
        <StyledLoginButton onClick={() => navigate("/profile")}>
          <FaUserAlt style={{ marginRight: "1vh" }} />
          {Miscellaneous.Profile}
        </StyledLoginButton>
      ) : (
        <StyledLoginButton onClick={handleOpenModal}>
          <FaKey style={{ marginRight: "1vh" }} />
          {Miscellaneous.LoginButton}
        </StyledLoginButton>
      )}
    </StyledDivInput>
  );
}

export default ButtonLogin;
