import { FeaturedGamesDetails, SectionHeader, SectionWrapper } from "../ComponentLinks";
import './FeaturedGames.css'
const FeaturedGames = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader sectiontitle="Featured" sectionname=" Games" />
        <FeaturedGamesDetails />
      </SectionWrapper>
    </>
  );
};

export default FeaturedGames;
