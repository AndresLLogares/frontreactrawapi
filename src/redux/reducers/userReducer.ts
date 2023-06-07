import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  EnumBasicInformation,
  EnumProfileInformation,
  EnumUserInformation,
  EnumUserReducer,
} from "../../enums/redux";
import { ReponseUser } from "../../enums/responseAxios/getUser/enum";

const initialState: EnumUserReducer = {
  userBasicInformation: {
    loading: false,
    JWT: null,
    userName: null,
    userId: null,
    isSucceful: false,
    profileId: null,
  },
  userProfileInformation: {
    loading: false,
    firstName: null,
    lastName: null,
    favorites: null,
    age: null,
    isSucceful: false,
  },
  userInformation: {
    loading: false,
    profileId: null,
    isSucceful: false,
  },
};

export const userSlice = createSlice({
  name: "useReducer",
  initialState,
  reducers: {
    getBasiceInformationRequest: (state: EnumUserReducer) => {
      state.userBasicInformation.loading = true;
    },
    getBasicInformation: (
      state: EnumUserReducer,
      action: PayloadAction<EnumBasicInformation>
    ) => {
      state.userBasicInformation.loading = false;
      state.userBasicInformation.JWT = action.payload.JWT;
      state.userBasicInformation.userName = action.payload.userName;
      state.userBasicInformation.userId = action.payload.userId;
      state.userBasicInformation.profileId = action.payload.profileId;
      state.userBasicInformation.isSucceful = true;
    },
    getBasicInformationError: (state: EnumUserReducer) => {
      state.userBasicInformation.loading = false;
      state.userBasicInformation.isSucceful = false;
    },
    getProfileInformationRequest: (state: EnumUserReducer) => {
      state.userProfileInformation.loading = true;
    },
    getProfileInformation: (
      state: EnumUserReducer,
      action: PayloadAction<ReponseUser[]>
    ) => {
      state.userProfileInformation.loading = false;
      state.userProfileInformation.firstName =
        action.payload[0].profile?.first_name;
      state.userProfileInformation.lastName =
        action.payload[0].profile?.last_name;
      state.userProfileInformation.age = action.payload[0].profile?.age;
      state.userProfileInformation.favorites =
        action.payload[0].profile?.favorites;
      state.userProfileInformation.isSucceful = true;
    },
    getProfileInformationError: (state: EnumUserReducer) => {
      state.userProfileInformation.loading = false;
      state.userProfileInformation.isSucceful = false;
    },
    getUserInformationRequest: (state: EnumUserReducer) => {
      state.userInformation.loading = true;
    },
    getUserInformation: (
      state: EnumUserReducer,
      action: PayloadAction<EnumUserInformation>
    ) => {
      state.userInformation.loading = false;
      state.userInformation.profileId = action.payload.profileId;
      state.userInformation.isSucceful = true;
    },
    getUserInformationError: (state: EnumUserReducer) => {
      state.userInformation.loading = false;
      state.userInformation.isSucceful = false;
    },
  },
});

export const {
  getBasiceInformationRequest,
  getBasicInformation,
  getBasicInformationError,
  getProfileInformationRequest,
  getProfileInformation,
  getProfileInformationError,
  getUserInformationRequest,
  getUserInformation,
  getUserInformationError,
} = userSlice.actions;

export default userSlice.reducer;
