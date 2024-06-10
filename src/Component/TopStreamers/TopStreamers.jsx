import { SectionHeader, SectionWrapper, TopStreamersDetails } from "../ComponentLinks";
import './TopStreamers.css'
const TopStreamers = () => {
  return (
    <>
    <SectionWrapper>
      <SectionHeader sectiontitle="Top" sectionname=" Streams" />
      <TopStreamersDetails />
    </SectionWrapper>
  </>
  )
}

export default TopStreamers