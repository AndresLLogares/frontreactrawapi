import React from "react";
import { useEffect } from "react";
import { BoxMain } from "../../styles/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getBasiceInformationRequest,
  getUserInformationRequest,
} from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

function Layout(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(getBasiceInformationRequest());
    dispatch(getUserInformationRequest());
  }, []);
  return (
    <>
      <ToastContainer />
      <BoxMain>{props?.children}</BoxMain>
    </>
  );
}

export default Layout;
