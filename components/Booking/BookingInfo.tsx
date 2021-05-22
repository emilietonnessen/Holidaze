import { Location, Phone, Envelope } from '../UI/Icons';
import { primary } from "../../constants/colors";
import { BookingInfoProps } from "../../constants/interfaces";



const BookingInfo: React.FC<BookingInfoProps> = ({street, zipCode, city, phone, email}) => (
    <section className="booking-info">
        <div className="booking-info__content">
            <div className="booking-info__box">
                <Location color={primary} classes="booking-info__icon"/>
                <h5 className="booking-info__title">Address</h5>
                <p className="booking-info__text">{street}</p>
                <p className="booking-info__text">{zipCode}, {city}</p>
                <p className="booking-info__text">Norway</p>
            </div>
            <div className="booking-info__box">
                <Phone color={primary} classes="booking-info__icon"/>
                <h5 className="booking-info__title">Phone</h5>
                <p className="booking-info__text">+47 {phone}</p>
            </div>
            <div className="booking-info__box">
                <Envelope color={primary} classes="booking-info__icon"/>
                <h5 className="booking-info__title">Email</h5>
                <p className="booking-info__text">{email}</p>
            </div>
        </div>
    </section>
);

export default BookingInfo;