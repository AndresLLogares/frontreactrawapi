import axios from "axios";
import { url } from "./useSignUp";
import { Data } from "../enums/responseAxios/login/enum";

export const useLogin = () => {
  const handleLogin = async (userName: string, password: string) => {
    const response: Data = await axios
      .post(url + "/login", {
        username: userName,
        password: password,
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
  return [handleLogin];
};
