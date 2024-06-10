import "./SectionHeader.css";
const SectionHeader = (props) => {
  return (
    <>
      <div className="heading-section">
        <h4>
          <em>{props.sectiontitle}</em>{props.sectionname}
        </h4>
      </div>
    </>
  );
};

export default SectionHeader;
