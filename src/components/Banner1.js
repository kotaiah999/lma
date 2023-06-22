import "./Banner1.css";
import cardImg1 from "./Images/cardImg1.jpg";
import bannerImg1 from "./Images/bannerImg1.jpg";
import vector1 from "./Images/Vector-1.png";
import vector2 from "./Images/Vector-2.png";

const Banner1 = () => {
  return (
    <div className="banner-container">
      <div className="banner-card-section-one">
        <div className="section-card-one">
          <h1 className="heading">
            <span className="span-one">Boost</span> Your Business Fast{" "}
            <span className="span-two">with</span>{" "}
            <span className="span-three">Ease</span>
          </h1>
        </div>
        <div className="section-card-two">
          <div>
            <img src={cardImg1} alt="cardImg1" width={150} height={230} />
          </div>
          <div className="card-inner">
            <div className="icons">
              <img src={vector1} alt="vector1" className="vector1" />
              <img src={vector2} alt="vector2" className="vector2" />
            </div>
            <div>
              <div className="banner-text">
                Office ipsum you must be muted. Meaningful it knowledge winning they hanging group me. Users activities dangerous ourselves options too. Let's engagement weeks marginalised.
              </div>
            </div>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="banner-card-section-two">
        <img className="bannerImg1" src={bannerImg1} alt="bannerImg1" />
      </div>
    </div>
  );
};
export default Banner1;
