import { ofType } from "redux-observable";
import {
  getBasicInformation,
  getBasicInformationError,
  getBasiceInformationRequest,
} from "../reducers/userReducer";
import { Observable, catchError, from, map, mergeMap, of } from "rxjs";
import Cookies from "universal-cookie";

const getInformationFromLocalStorage = (subscriber: any) => {
  const cookies = new Cookies();

  const response = {
    JWT: localStorage.getItem("jwt"),
    userId: cookies.get("userId"),
    userName: cookies.get("userName"),
    profileId: cookies.get("profileId"),
  };
  subscriber.next(response);
};

const getFromLocalStorage$ = new Observable(getInformationFromLocalStorage);

export const getBasicInformationAction = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(getBasiceInformationRequest),
    mergeMap((action: any) =>
      from(getFromLocalStorage$).pipe(
        map((response: any) => {
          if (response.JWT) {
            return getBasicInformation(response);
          } else {
            throw response;
          }
        }),
        catchError((err) => {
          return of(getBasicInformationError());
        })
      )
    )
  );
};
