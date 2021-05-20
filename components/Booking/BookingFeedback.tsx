import Modal from '../UI/Modal';

export const BookingFeedbackSuccess = () => (
    <Modal link="#main" id="feedback-success" classes="booking-feedback">
        <div className="modal-feedback">
            <h3 className="modal-feedback__title">
                Thank you!
            </h3>
            <p className="modal-feedback__text">
                Your booking enquiry has been successfully sent. We will contact you very soon!
            </p>
        </div>
    </Modal>
);

export default BookingFeedbackSuccess;