import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { useGetUser } from "../../hooks/useGetUser";
import {
  getProfileInformation,
  getProfileInformationError,
  getProfileInformationRequest,
} from "../reducers/userReducer";

export const getOneUserAction = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(getProfileInformationRequest),
    mergeMap((action: any) =>
      from(useGetUser()).pipe(
        map((response: any) => {
          if (response) {
            return getProfileInformation(response);
          } else {
            throw response;
          }
        }),
        catchError((err) => {
          return of(getProfileInformationError());
        })
      )
    )
  );
};
