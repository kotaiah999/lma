import "./Banner4.css";
import imageGallary from './Images/imageGallary.png'
const Banner4 = () => {
  const cardFooterDetailsTwo = [
    {
      cardfootertitle: "Get Work Nearby You",
      icon: imageGallary,
      cardfooterdes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      cardfootertitle: "Get Unlimated Work",
      icon: imageGallary,
      cardfooterdes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      cardfootertitle: "Get Paid",
      icon: imageGallary,
      cardfooterdes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      cardfootertitle: "Get Paid",
      icon: imageGallary,
      cardfooterdes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
  ];
  return (
    <div className="Banner4-container">
        <div className="Banner4-card-inner">
            <button className="Banner4-btn">Our Features</button>
            <div className="Banner4-text">Office Ipsum You Must See</div>
        </div>
      <div className="card-footer-two">
        {cardFooterDetailsTwo.map((el, i) => {
          return (
            <div className="card-two">
              <div className="icon-conatiner-two">
                <img src={el.icon} alt="bagicon" width={30} height={30} />
              </div>
              <div className="card-footer-title-two">{el.cardfootertitle}</div>
              <div className="card-footer-desc-two">{el.cardfooterdes}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Banner4;
