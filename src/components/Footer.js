import './Footer.css';
import wordImg from './Images/wordImg.png';
const Footer = () => {
    const footerData = {
        logo: {
            imageSrc: "path/to/Word.png",
            altText: "bagicon",
        },
        name: "LMA",
        description: "Last Minute App",
        links: ["About Us", "How It Works", "Contact Us"],
        copyright: "Copyright © Last Minute App",
        termsAndConditions: "Terms & Conditions",
        privacyPolicy: "Privacy Policy",
    };
    const {
        logo,
        name,
        description,
        links,
        copyright,
        termsAndConditions,
        privacyPolicy,
    } = footerData;
    return (
        <div className='footer-container'>
            <footer className="footer-conatiner">
                <div className="word-container">
                    <div className="word-logo">
                        <img src={wordImg} alt="bagicon" width={150} height={50} />
                    </div>
                </div>
                <div className="footer-conatiner-desc">
                    {links.map((link, index) => (
                        <div key={index}>{link}</div>
                    ))}
                </div>
                <div className="footer-conatiner-desc-two">
                    <div style={{ color: "#4a5673" }}>{copyright}</div>
                    <div className="terms-privacy-container">
                        <div>{termsAndConditions}</div>
                        <div className="line"></div>
                        <div>{privacyPolicy}</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;