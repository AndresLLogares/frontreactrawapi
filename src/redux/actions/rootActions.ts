import { combineEpics } from "redux-observable";
import { getBasicInformationAction } from "./getBasicInformation";
import { getOneUserAction } from "./getUserInformation";

export const rootEpic = combineEpics(
  getBasicInformationAction,
  getOneUserAction
);
