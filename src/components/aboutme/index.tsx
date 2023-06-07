import { ButtonsMainEnum, Contact, MainTitles } from "../../enums/titles/enum";
import {
  StyledAboutTitle,
  StyledDivAbout,
  StyledDivAboutTitle,
  StyledGridContact,
  StyledHR,
  StyledIcons,
} from "../../styles/aboutme";
import { Colors } from "../../styles/colors";
import { BoxCards, TitleCard } from "../../styles/main";
import Main from "../main";
import {
  FaAddressCard,
  FaLinkedin,
  FaGithub,
  FaPortrait,
  FaFileAlt,
  FaMailBulk,
  FaPhoneSquareAlt,
} from "react-icons/fa";

function AboutMe() {
  return (
    <Main>
      <StyledDivAbout>
        <BoxCards>
          <TitleCard>
            <FaAddressCard style={{ marginRight: 10 }} />
            {ButtonsMainEnum.AboutMe}
          </TitleCard>
        </BoxCards>
        <StyledDivAboutTitle>
          <StyledAboutTitle>{MainTitles.TitlesAboutMe}</StyledAboutTitle>
        </StyledDivAboutTitle>
        <StyledHR />

        <TitleCard>{Contact.ContactMe}</TitleCard>
        <StyledGridContact>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
          >
            <FaLinkedin
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.LinkedIn}
          </StyledIcons>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AndresLLogares"
          >
            <FaGithub
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.Github}
          </StyledIcons>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="https://andreslogares.netlify.app/"
          >
            <FaPortrait
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.Portfolio}
          </StyledIcons>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view"
          >
            <FaFileAlt
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.Resume}
          </StyledIcons>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="mailto:andresl940@hotmail.com"
          >
            <FaMailBulk
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.Email}
          </StyledIcons>
          <StyledIcons
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/5491136005563"
          >
            <FaPhoneSquareAlt
              size={20}
              color={Colors.white}
              style={{ marginBottom: 10 }}
            />
            {Contact.Phone}
          </StyledIcons>
        </StyledGridContact>
      </StyledDivAbout>
    </Main>
  );
}

export default AboutMe;
