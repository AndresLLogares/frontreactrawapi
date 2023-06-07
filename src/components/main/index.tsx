import React from "react";
import { MainTitles } from "../../enums/titles/enum";
import { BoxWrapper, TitleMain } from "../../styles/main";
import ButtonsMain from "../buttonsMain";
import Layout from "../layout";
import NavBar from "../navbar";

function Main(props: any) {
  return (
    <Layout>
      <header style={{ width: "100%" }}>
        <BoxWrapper>
          <TitleMain>{MainTitles.TitlesMain}</TitleMain>
        </BoxWrapper>
        <NavBar />
        <ButtonsMain />
      </header>
      <main style={{ width: "100%" }}>{props?.children}</main>
    </Layout>
  );
}

export default Main;
