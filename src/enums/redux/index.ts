export interface EnumUserReducer {
  userBasicInformation: EnumBasicInformation;
  userProfileInformation: EnumProfileInformation;
  userInformation: EnumUserInformation;
}

export interface EnumUserInformation {
  loading: boolean;
  profileId: string | null;
  isSucceful: boolean;
}

export interface EnumBasicInformation {
  loading: boolean;
  JWT: string | null;
  userName: string | null;
  userId: number | null;
  isSucceful: boolean;
  profileId: string | null;
}

export interface EnumProfileInformation {
  loading: boolean;
  firstName: string | null;
  lastName: string | null;
  favorites: string | null;
  age: number | null;
  isSucceful: boolean;
}
