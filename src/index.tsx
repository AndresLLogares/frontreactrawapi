import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Genres from "./components/genres/index";
import AboutMe from "./components/aboutme/index";
import Loading from "./components/loading/index";
import Platforms from "./components/platforms";
import Publishers from "./components/publishers";
import Stores from "./components/stores";
import Details from "./components/details";
import Game from "./components/games";
import Developers from "./components/developers";
import GamesSearched from "./components/gamesSearched";
import ProfileUser from "./components/profile";
import { Provider } from "react-redux";
import AppReduxStore from "./redux/reduxStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutMe />,
    errorElement: <Loading />,
  },
  {
    path: "/genres",
    element: <Genres />,
    errorElement: <Loading />,
  },
  {
    path: "/platforms",
    element: <Platforms />,
    errorElement: <Loading />,
  },
  {
    path: "/publishers",
    element: <Publishers />,
    errorElement: <Loading />,
  },
  {
    path: "/stores",
    element: <Stores />,
    errorElement: <Loading />,
  },
  {
    path: "/developers",
    element: <Developers />,
    errorElement: <Loading />,
  },
  {
    path: "/details",
    element: <Details />,
    errorElement: <Loading />,
  },
  {
    path: "/games",
    element: <Game />,
    errorElement: <Loading />,
  },
  {
    path: "/search",
    element: <GamesSearched />,
    errorElement: <Loading />,
  },
  {
    path: "/profile",
    element: <ProfileUser />,
    errorElement: <Loading />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={AppReduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
