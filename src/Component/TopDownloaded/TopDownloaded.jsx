import './TopDownloaded.css'
import { DownloadedDetails, SectionHeader, SectionWrapper } from "../ComponentLinks";

const TopDownloaded = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader sectiontitle="Top" sectionname=" Downloaded" />
        <DownloadedDetails />
      </SectionWrapper>
    </>
  );
};

export default TopDownloaded;
