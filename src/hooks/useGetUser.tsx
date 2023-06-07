import axios from "axios";
import { url } from "./useSignUp";
import { Data } from "../enums/responseAxios/login/enum";
import Cookies from "universal-cookie";
import { ReponseUser } from "../enums/responseAxios/getUser/enum";

export const useGetUser = async () => {
  const cookies = new Cookies();

  const id = cookies.get("userId");
  const response: ReponseUser = await axios
    .post(url + "/users/findone", {
      id: Number(id),
    })
    .then(
      (response) => {
        return response.data.flat(Infinity);
      },
      (error) => {
        console.log(error);
      }
    );
  return response;
};
