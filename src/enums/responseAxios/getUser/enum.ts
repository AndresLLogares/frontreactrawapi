// Generated by https://quicktype.io

export interface ReponseUser {
  userProfileInformation: any;
  id: number;
  user_name: string;
  email: string;
  password: string;
  created_at: string;
  auth_strategy: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  favorites: string;
}