import './Banner5.css';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import left from './Images/left.png';
import right from './Images/right.png';
const Banner5 = () => {



    const cardFeedbackDetails = [
        { cardfeedbacktitle: "What Our Client Say About Us" },
        {
            cardfeedbackdesc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];




    const cardData = [
        {
            rating: 5,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "John Doe",
            job: "Office ispum you must be",
            icon: img1,
        },
        {
            rating: 4,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "Jane Smith",
            job: "Lorem ipsum",
            icon: img2,
        },
        {
            rating: 3,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "Jenny Wilson",
            job: "Consectetur adipiscing elit",
            icon: img3,
        },
    ];




    return (
        <div className='Banner5-container'>

            <div className="card-feedback">
                <div className="card-feedback-header-section">
                    <div>
                        {cardFeedbackDetails.map((el, i) => {
                            return (
                                <>
                                    <div className="card-feedback-title">
                                        {el.cardfeedbacktitle}
                                    </div>
                                    <div className='card-banner5-text'>{el.cardfeedbackdesc}</div>
                                </>
                            );
                        })}
                    </div>
                    <div className="arrow-container">
                        <div class="circle-button">
                            <span class="arrow-left">
                                <img className='leftArrow' src={left} alt="bagicon" width={30} height={30} />
                            </span>
                        </div>

                        <div class="circle-button" id='rightArrow'>
                            <span class="arrow-right">
                                <img className='rightArrow' src={right} alt="bagicon" width={30} height={30} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-feedback-container">
                    {cardData.map((card, index) => (
                        <div className="card-feedback-container" key={index}>
                            <div className="card-feedback-first-conatiner">
                                <div className="rating">
                                    <input
                                        type="radio"
                                        id={`star5-${index}`}
                                        name={`rating-${index}`}
                                        value="5"
                                    />
                                    <label htmlFor={`star5-${index}`}></label>
                                    <input
                                        type="radio"
                                        id={`star4-${index}`}
                                        name={`rating-${index}`}
                                        value="4"
                                    />
                                    <label htmlFor={`star4-${index}`}></label>
                                    <input
                                        type="radio"
                                        id={`star3-${index}`}
                                        name={`rating-${index}`}
                                        value="3"
                                    />
                                    <label htmlFor={`star3-${index}`}></label>
                                    <input
                                        type="radio"
                                        id={`star2-${index}`}
                                        name={`rating-${index}`}
                                        value="2"
                                    />
                                    <label htmlFor={`star2-${index}`}></label>
                                    <input
                                        type="radio"
                                        id={`star1-${index}`}
                                        name={`rating-${index}`}
                                        value="1"
                                    />
                                    <label htmlFor={`star5-${index}`}></label>
                                    {/* Include other radio inputs and labels for different ratings */}
                                </div>
                                <div className='banner5-text'>{card.text}</div>
                                <div className="avtar-section-feedback-card">
                                    <img src={card.icon} alt="bagicon" width={45} height={45} />
                                    <div>
                                        <div className="user-name-container">{card.name}</div>
                                        <div className="user-job-des">{card.job}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Banner5;