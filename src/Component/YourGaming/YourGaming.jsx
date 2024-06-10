import "./YourGaming.css";
import {
  GamingDetails,
  // MostPopularCard,
  SectionButton,
  SectionHeader,
  SectionWrapper,
} from "../ComponentLinks";
const YourGaming = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader sectiontitle="Your Gaming" sectionname=" Library" />

        <GamingDetails
          imgGameing="game-01.jpg"
          gamingName="Dota 2"
          numHours="634 H 22 Mins"
          date="24/08/2036"
        />
        <GamingDetails
          imgGameing="game-02.jpg"
          gamingName="Fortnite"
          numHours="740 H 52 Mins"
          date="22/06/2036"
        />
        <GamingDetails
          imgGameing="game-03.jpg"
          gamingName="CS-GO"
          numHours="892 H 14 Mins"
          date="21/04/2030"
        />

        <SectionButton buttonName="View Your Library" toWhere="profile"/>
      </SectionWrapper>
    </>
  );
};

export default YourGaming;
