import { useState } from "react";
import { Loader } from "../../styles/loading";
import { BoxLoading } from "../../styles/main";
import Layout from "../layout";
import {
  StyledDivDetails,
  StyledDivTitleDetails,
  StyledSubtitles,
  StyledTitleDetails,
} from "../../styles/details";
import ButtonBack from "../buttonBack";
import { Colors } from "../../styles/colors";
import React from "react";
import { useSelector } from "react-redux";
import { EnumBasicInformation } from "../../enums/redux";
import { FormUpdate } from "../inputProfile";
import { ContainerProfile } from "../../styles/profile";
import InformationProfile from "../informationProfile";
import { Miscellaneous, ProfileInformationEnum } from "../../enums/titles/enum";
import { CardsProfile } from "../cardsProfile";

function ProfileUser() {
  const userBasicInformation: EnumBasicInformation = useSelector(
    (state: any) => state?.userInformation?.userBasicInformation
  );
  return (
    <Layout>
      {userBasicInformation.loading ? (
        <BoxLoading>
          <Loader></Loader>
        </BoxLoading>
      ) : (
        <>
          <StyledDivDetails colorBackground={Colors.black}>
            <ButtonBack />
            <StyledDivTitleDetails>
              <StyledTitleDetails colorText={Colors.grey}>
                {userBasicInformation?.userName}
              </StyledTitleDetails>
            </StyledDivTitleDetails>
            <StyledSubtitles colorText={Colors.grey}>
              {Miscellaneous.Profile}
            </StyledSubtitles>
            <ContainerProfile>
              <FormUpdate />
              <InformationProfile />
            </ContainerProfile>
          </StyledDivDetails>
          <StyledDivDetails colorBackground={Colors.grey} marginTop="2vh">
            <StyledSubtitles colorText={Colors.black}>
              {ProfileInformationEnum.Favorites}
            </StyledSubtitles>
            <CardsProfile />
          </StyledDivDetails>
        </>
      )}
    </Layout>
  );
}

export default ProfileUser;
