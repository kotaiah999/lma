import './Banner3.css';
import background from './Images/Line.png';
import background2 from './Images/line2.png';
import background3 from './Images/line3.png';
import cardImg3 from './Images/cardImg3.png';
const BannerThree =()=>{
    return(
        <div className='Banner3-container'>
            {/* BACKGROUND IMAGE CONTAINER */}
            <div className='BannerThree-main-container'>
                <img src={background} width='100%' height={700} style={{ position: 'relative'}} alt='background' />
                <img src={background2} width={100} height={200} className='bg2' alt='background2' />
                <img src={background3} width={100} height={200} className='bg3' alt='background3' />
            </div>
            {/* MAIN CONTENT */}
            <div className='Banner3-content'>
                <div className='content-one'>
                    <button className='Banner3-btn-one'>Office ipsum you must</button>
                    <div className='text'>Office ipsum you must be muted. Sky quick-win web loss.</div>
                    <p>Office ipsum you must be muted. Reinvent important across sorry encourage synchronise mifflin quick-win. But due tent look bandwagon sandwich. Well streamline open per both. Panel.</p>
                    <button className='Banner3-btn-two'>Explore More</button>
                </div>
                <div className='content-two'>
                    <img className='content-img' src={cardImg3} alt='cardImg3' width={700} height={500} />
                </div>
            </div>

        </div>
    )
}
export default BannerThree;