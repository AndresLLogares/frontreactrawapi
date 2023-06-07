import allUserSlice from "./userReducer";

const rootReducer = () => {
  return {
    userInformation: allUserSlice,
  };
};

export default rootReducer;
