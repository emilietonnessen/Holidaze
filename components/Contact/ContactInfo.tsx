import * as icons from '../UI/Icons';

const ContactInfo: React.FC = () => {

    const primaryColor = "#ff1447";

    return (
        <div className="contact-info">
            <div className="contact-info__info-box">
                <div className="contact-info__box">
                    <div className="contact-info__icon">
                        <icons.Location color={primaryColor} />
                    </div>
                    
                    <h6 className="contact-info__title">Address</h6>
                    <p className="contact-info__text">
                        <span className="contact-info__text--break">Torget</span>
                        <span className="contact-info__text--break">5014, Bergen</span>
                        <span className="contact-info__text--break">Norway</span>
                    </p>
                </div>
                <div className="contact-info__box">
                    <div className="contact-info__icon">
                        <icons.Phone color={primaryColor} />
                    </div>
                    <h6 className="contact-info__title">Phone</h6>
                    <p className="contact-info__text">
                        +47 123 45 678
                    </p>
                </div>
                <div className="contact-info__box">
                    <div className="contact-info__icon">
                        <icons.Envelope color={primaryColor} />
                    </div>
                    <h6 className="contact-info__title">Email</h6>
                    <p className="contact-info__text">
                        holidaze@support.no
                    </p>
                </div>

                <div className="contact-info__arrow" />    
            </div>
            
            <div className="contact-info__marker">
                <div className="contact-info__marker--1"></div>
                <div className="contact-info__marker--2"></div>
                <div className="contact-info__marker--3"></div>
            </div>
        </div>
    );
}

export default ContactInfo;