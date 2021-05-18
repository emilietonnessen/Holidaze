import Modal from '../UI/Modal';
import BookingInfo from "./BookingInfo";
import BookingForm from "./BookingForm";
import { BookingModalProps } from '../../constants/interfaces';



const Booking: React.FC<BookingModalProps> = ({email, phone, street, zipCode, city, establishmentName }) => (
    <Modal link="#main" id="booking" classes="booking">
        <div className="booking-enquiry">

            {/* Left Side: Booking Information */}
            <BookingInfo street={street} email={email} phone={phone} zipCode={zipCode} city={city} />
                
            {/* Right Side: Booking Form */}
            <BookingForm establishmentName={establishmentName} />
            
        </div>
    </Modal>
);

export default Booking;