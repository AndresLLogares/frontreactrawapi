import { useDispatch, useSelector } from "react-redux";
import { ProfileInformationEnum } from "../../enums/titles/enum";
import { StyledTextDetailsGame } from "../../styles/detailsGame";
import { ProfileInformation } from "../../styles/profile";
import { useEffect } from "react";
import { getProfileInformationRequest } from "../../redux/reducers/userReducer";
import { EnumProfileInformation } from "../../enums/redux";

function InformationProfile() {
  const userProfile: EnumProfileInformation = useSelector(
    (state: any) => state?.userInformation?.userProfileInformation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileInformationRequest());
  }, []);
  return (
    <ProfileInformation>
      <StyledTextDetailsGame>
        {ProfileInformationEnum.FirstName}: {userProfile?.firstName}
      </StyledTextDetailsGame>
      <StyledTextDetailsGame>
        {ProfileInformationEnum.LastName}: {userProfile?.lastName}
      </StyledTextDetailsGame>
      <StyledTextDetailsGame>
        {ProfileInformationEnum.Age}: {userProfile?.age}
      </StyledTextDetailsGame>
    </ProfileInformation>
  );
}

export default InformationProfile;
