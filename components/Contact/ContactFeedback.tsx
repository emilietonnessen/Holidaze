import Modal from '../UI/Modal';

 const ContactFeedback: React.FC = () => (
    <Modal link="#contact" id="contact-feedback" classes="contact-feedback">
        <div className="modal-feedback">
            <h3 className="modal-feedback__title">
                Thank you!
            </h3>
            <p className="modal-feedback__text">
                Your message has been successfully sent. We will contact you very soon!
            </p>
        </div>
    </Modal>
);

export default ContactFeedback;