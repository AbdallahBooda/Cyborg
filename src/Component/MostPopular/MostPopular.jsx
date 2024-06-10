import {
  MostPopularCard,
  SectionButton,
  SectionHeader,
  SectionWrapper,
} from "../ComponentLinks";
import "./MostPopular.css";
const MostPopular = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader sectiontitle="Most Popular" sectionname=" Right Now" />
        <div className="row">
          <MostPopularCard
            img="popular-01.jpg"
            title="Fortnite"
            category="Sandbox"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-02.jpg"
            title="PubG"
            category="Battle S"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-03.jpg"
            title="Dota2"
            category="Steam-X"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-04.jpg"
            title="CS-GO"
            category="Legendary"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-05.jpg"
            title="Mini Craft"
            category="Legendary"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-06.jpg"
            title="Eagles Fly"
            category="Matrix Games"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-07.jpg"
            title="Warface"
            category="Max 3D"
            rate="4.8"
            dawnload="2.3m"
          />
          <MostPopularCard
            img="popular-08.jpg"
            title="Warcraft"
            category="Legend"
            rate="4.8"
            dawnload="2.3m"
          />

          <SectionButton buttonName="Discover Popular" toWhere="browse"/>
        </div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
