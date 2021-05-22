import { primary } from '../../constants/colors';
import {Location, Phone, Envelope} from '../UI/Icons';

const ContactInfo: React.FC = () => (
    <div className="contact-info">
        <div className="contact-info__info-box">
            <div className="contact-info__box">
                <div className="contact-info__icon">
                    <Location color={primary} />
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
                    <Phone color={primary} />
                </div>
                <h6 className="contact-info__title">Phone</h6>
                <p className="contact-info__text">
                    +47 123 45 678
                </p>
            </div>
            <div className="contact-info__box">
                <div className="contact-info__icon">
                    <Envelope color={primary} />
                </div>
                <h6 className="contact-info__title">Email</h6>
                <p className="contact-info__text">
                    holidaze@support.no
                </p>
            </div>
        </div>
    </div>
);


export default ContactInfo;