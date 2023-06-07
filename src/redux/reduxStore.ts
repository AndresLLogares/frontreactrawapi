import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./actions/rootActions";

const epicMiddleware = createEpicMiddleware();
const AppReduxStore = configureStore({
  reducer: rootReducer(),
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpic);

export default AppReduxStore;
