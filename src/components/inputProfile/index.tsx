import React, { useState } from "react";
import { Miscellaneous, ProfileInformationEnum } from "../../enums/titles/enum";
import {
  StyledButtonChangePopUp,
  StyledFormLogin,
  StyledInputPopUp,
} from "../../styles/modalLogin";
import { toast } from "react-toastify";
import { useAddProfile } from "../../hooks/useAddProfile";
import { getProfileInformationRequest } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export const FormUpdate: React.FC = () => {
  const [handleAddProfile] = useAddProfile();
  const dispatch = useDispatch();
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    age: "",
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
    const response = await handleAddProfile(
      information.firstName,
      information.lastName,
      Number(information.age),
      ""
    );
    if (!response) {
      toast.error(Miscellaneous.LoginError);
      return;
    }
    await dispatch(getProfileInformationRequest());
    await toast.success(Miscellaneous.UpdateSuccessfully);
    setInformation({ lastName: "", age: "", firstName: "" });
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit}>
      <StyledInputPopUp
        type="text"
        name="firstName"
        required={false}
        value={information.firstName}
        onChange={handleInput}
        placeholder={ProfileInformationEnum.FirstName}
      />
      <StyledInputPopUp
        type="text"
        name="lastName"
        value={information.lastName}
        onChange={handleInput}
        required={false}
        placeholder={ProfileInformationEnum.LastName}
      />
      <StyledInputPopUp
        type="number"
        name="age"
        value={information.age}
        onChange={handleInput}
        required={false}
        placeholder={ProfileInformationEnum.Age}
      />
      <StyledButtonChangePopUp type="submit">
        {Miscellaneous.Update}
      </StyledButtonChangePopUp>
    </StyledFormLogin>
  );
};
