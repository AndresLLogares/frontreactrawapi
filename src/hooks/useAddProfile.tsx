import axios from "axios";
import { url } from "./useSignUp";
import { EnumBasicInformation } from "../enums/redux";
import { useSelector } from "react-redux";

export const useAddProfile = () => {
  const userBasicInformation: EnumBasicInformation = useSelector(
    (state: any) => state?.userInformation?.userBasicInformation
  );
  const urlCall = url + "/users/" + userBasicInformation.userId + "/profile";
  const handleAddProfile = async (
    firstName: string,
    lastName: string,
    age: number,
    favorites: string
  ) => {
    const response = await axios
      .post(urlCall, {
        id: userBasicInformation.userId,
        profile: {
          first_name: firstName,
          last_name: lastName,
          age: age,
          favorites: favorites,
          profileId: userBasicInformation.profileId,
        },
      })
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    return response;
  };
  return [handleAddProfile];
};
