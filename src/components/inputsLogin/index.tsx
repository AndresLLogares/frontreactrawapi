import React, { useState } from "react";
import { Miscellaneous } from "../../enums/titles/enum";
import {
  StyledButtonChangePopUp,
  StyledFormLogin,
  StyledInputPopUp,
} from "../../styles/modalLogin";
import { useSignUp } from "../../hooks/useSignUp";
import { toast } from "react-toastify";
import {
  FormLoginEnum,
  FormSingUpEnum,
} from "../../enums/responseAxios/signup/enum";
import { useLogin } from "../../hooks/useLogin";
import { getBasiceInformationRequest } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { LoginEnum } from "../../enums/responseAxios/login/enum";

export const FormLogin: React.FC<FormLoginEnum> = ({ handleOpenModal }) => {
  const [handleLogin] = useLogin();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [information, setInformation] = useState({
    username: "",
    password: "",
  });

  const handleInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInformation({
      ...information,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response: any = await handleLogin(
      information.username,
      information.password
    );
    if (!response) {
      toast.error(Miscellaneous.LoginError);
      return;
    }
    await localStorage.setItem("jwt", response?.access_token);
    await cookies.set("userId", response?.id.toString(), { path: "/" });
    await cookies.set("userName", response?.user_name.toString(), {
      path: "/",
    });
    await dispatch(getBasiceInformationRequest());
    await setInformation({ username: "", password: "" });
    await toast.success(Miscellaneous.Welcome + " " + response?.user_name);
    return await handleOpenModal();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit}>
      <StyledInputPopUp
        type="text"
        name="username"
        required={true}
        value={information.username}
        onChange={handleInput}
        placeholder={Miscellaneous.userName}
      />
      <StyledInputPopUp
        type="password"
        name="password"
        value={information.password}
        onChange={handleInput}
        required={true}
        placeholder={Miscellaneous.password}
      />
      <StyledButtonChangePopUp type="submit">
        {Miscellaneous.Login}
      </StyledButtonChangePopUp>
    </StyledFormLogin>
  );
};

export const FormSignup: React.FC<FormSingUpEnum> = ({ handleChangeLogin }) => {
  const [handleSignUp] = useSignUp();
  const [information, setInformation] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInformation({
      ...information,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await handleSignUp(
        information.username,
        information.password,
        information.email
      );
      if (response.status !== 200) {
        return toast.error(response.message);
      }
      await setInformation({ username: "", password: "", email: "" });
      await handleChangeLogin();
      return toast.success(response.message);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledFormLogin onSubmit={handleSubmit}>
      <StyledInputPopUp
        type="email"
        name="email"
        required={true}
        value={information.email}
        onChange={handleInput}
        placeholder={Miscellaneous.Email}
      />
      <StyledInputPopUp
        type="text"
        name="username"
        required={true}
        value={information.username}
        onChange={handleInput}
        placeholder={Miscellaneous.userName}
      />
      <StyledInputPopUp
        type="password"
        name="password"
        required={true}
        value={information.password}
        onChange={handleInput}
        placeholder={Miscellaneous.password}
      />
      <StyledButtonChangePopUp type="submit">
        {Miscellaneous.Signup}
      </StyledButtonChangePopUp>
    </StyledFormLogin>
  );
};
