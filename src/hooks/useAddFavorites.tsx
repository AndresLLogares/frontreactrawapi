import axios from "axios";
import { url } from "./useSignUp";
import { EnumBasicInformation } from "../enums/redux";
import { useSelector } from "react-redux";

export const useAddFavorites = () => {
  const userBasicInformation: EnumBasicInformation = useSelector(
    (state: any) => state?.userInformation?.userBasicInformation
  );
  const urlCall = url + "/users/" + userBasicInformation.userId + "/favorites";
  const handleAddFavorites = async (favorites: string[]) => {
    const response = await axios
      .post(urlCall, {
        id: userBasicInformation.userId,
        profile: {
          favorites: favorites,
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
  return [handleAddFavorites];
};
