import { Developer, PlatformElement, Store } from "../games/enum";
import { Result } from "../genres/enum";
import { ResultLisOfGames } from "../listOfGames/enum";

export enum ButtonsMainEnum {
  Genres = "Genres",
  Platforms = "Platforms",
  Publishers = "Publishers",
  Stores = "Stores",
  Developers = "Developers",
  AboutMe = "About Me",
}

export enum MainTitles {
  TitlesMain = "Just playing with React",
  TitlesAboutMe = "Hello, my name is Andres a Software Developer, I made this web application to try new things in React and because in my opinion it's always good to go back to the beginning and do things just for fun.",
}

export enum Contact {
  LinkedIn = "LinkedIn",
  Portfolio = "Portfolio",
  Resume = "Resume",
  Email = "Email",
  Phone = "Phone",
  Github = "Github",
  ContactMe = "Contact Me",
}

export enum Miscellaneous {
  Search = "Search",
  Action = "Action",
  PC = "PC",
  Valve = "Valve",
  Steam = "Steam",
  Ubisoft = "Ubisoft",
  Showmore = "Show more",
  WeHave = "We have in our database:",
  description = "About",
  noDescription = "Sorry, we don't have any description available",
  listOfGames = "List of games",
  page = "Page:",
  details = "Details",
  SearchGames = "Search Game",
  ResultsSearch = "These are the results of your search",
  LoginButton = "Login / Sign Up",
  Login = "Login",
  Signup = "Sign Up",
  doYouHave = "I have an account",
  donNotHaveAccount = "Don't have an account?",
  userName = "User Name",
  password = "Password",
  Email = "Email",
  LoginError = "Password or Account are not valid",
  Welcome = "Welcome",
  Profile = "Profile",
  UpdateSuccessfully = "Updated Successfully",
  Update = "Update",
}
export enum ProfileInformationEnum {
  FirstName = "First Name",
  LastName = "Last Name",
  Age = "Age",
  Favorites = "Favorites",
  NoFavorite = "You don't have any favorites",
}
export enum AlertMessage {
  Empty = "The input can't be empty",
  Invalid = "The need atleast three characters",
  NotFound = "We don't have any games with that name",
}

export enum DetailsGameEnum {
  name_original = "Original name:",
  metacritic = "Metacritic:",
  released = "Released:",
  rating = "Rating:",
  rating_top = "Rating top:",
  platforms = "Platforms:",
  publishers = "Publishers:",
  stores = "Stores:",
  developers = "Developers:",
  genres = "Genres:",
  visit = "Visit Website",
}

export interface DetailsGameEnumList {
  originalName: string;
  metacritic: number;
  released: string;
  rating: number;
  ratingTop: number;
  visit: string;
  developers: Developer[];
  genres: Developer[];
  stores: Store[];
  platforms: PlatformElement[];
  publishers: Developer[];
  backImage: string;
}
export interface Menu {
  menuOpen: boolean;
}
export interface CardsEnum {
  handleClick: Function;
  dataCards: Result[];
}

export interface CardsGamesEnum {
  handleClick: Function;
  dataCards: ResultLisOfGames[];
}

export enum ButtonFavoritesEnum {
  Add = "Add To Favorites",
  Remove = "Remove From Favorites",
  SuccessfullyAdded = "Successfully Added to Favorites",
  Error = "Sorry, something went wrong",
  SuccesfullyRemover = "Succesfully removed from Favorites",
}
