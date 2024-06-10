import "./Home.css";
import {HomeBanner, MostPopular, YourGaming} from "../../Component/ComponentLinks"
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <HomeBanner />
              <MostPopular />
              <YourGaming />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
