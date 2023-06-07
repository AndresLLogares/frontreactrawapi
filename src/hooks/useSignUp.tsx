import axios from "axios";
import { ResponseExample } from "../enums/responseAxios/signup/enum";

export const url: string = "http://localhost:8001";

export const useSignUp = () => {
  const handleSignUp = async (
    userName: string,
    password: string,
    email: string
  ) => {
    const response: ResponseExample = await axios
      .post(url + "/users", {
        user_name: userName,
        password: password,
        email: email,
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
  return [handleSignUp];
};
