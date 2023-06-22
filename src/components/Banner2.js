import './Banner2.css';
import BagIcon from "./Images/Vector.svg";
import FileIcon from "./Images/Vector(1).svg";
import PassbookIcon from "./Images/Vector(2).svg";
const Banner2 =()=>{
    const cardHeaderDetails = [
        { title: "How it works" },
        {
          des: "Office ipsum you must be muted. Done supervisor plan horse hit seems ideal. I digital streamline meaningful backwards club anomalies kimono. Solutions goto stronger value-added who's.",
        },
      ];
    
      const cardFooterDetails = [
        {
          cardfootertitle: "Get Work Nearby You",
          icon: BagIcon,
          cardfooterdes:
            "  Checkout other Dashboard Vectors with different styles in SVG vector and icon library.Checkout other Dashboard Vectors with different styles in SVG vector and icon library.",
        },
        {
          cardfootertitle: "Get Unlimated Work",
          icon: FileIcon,
          cardfooterdes:
            "  Checkout other Dashboard Vectors with different styles in SVG vector and icon library.Checkout other Dashboard Vectors with different styles in SVG vector and icon library.",
        },
        {
          cardfootertitle: "Get Paid",
          icon: PassbookIcon,
          cardfooterdes:
            "  Checkout other Dashboard Vectors with different styles in SVG vector and icon library.Checkout other Dashboard Vectors with different styles in SVG vector and icon library.",
        },
      ];
    return(
        <div className='Banner2-container'>
             <div className="card-conatiner">
            <div><button className='banner2-btn'>Office ipsum you</button></div>
        <div className="card-container-text">
          {cardHeaderDetails.map((el, i) => {
            return (
              <>
                <div className="card-title" key={i}>
                  {el.title}
                </div>
                <div className="card-desc">{el.des}</div>
              </>
            );
          })}
        </div>
        <div className="card-footer">
          {cardFooterDetails.map((el, i) => {
            return (
              <div className="card-one">
                <div className="icon-conatiner">
                  <img src={el.icon} alt="bagicon" width={20} height={20} />
                </div>
                <div className="card-footer-title">{el.cardfootertitle}</div>
                <div className="card-footer-desc">{el.cardfooterdes}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    )
}
export default Banner2;