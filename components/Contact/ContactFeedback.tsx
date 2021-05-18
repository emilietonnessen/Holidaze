import Modal from '../UI/Modal';

export const ContactFeedbackSuccess = () => (
    <Modal link="#contact" id="feedback-success" classes="modal-feedback">
        <div className="feedback">
            <h3 className="feedback__title">
                Thank you!
            </h3>
            <p className="feedback__text">
                Your message has been successfully sent. We will contact you very soon!
            </p>
        </div>
    </Modal>
);

export const ContactFeedbackError = () => (
    <Modal link="#contact" id="feedback-error" classes="modal-feedback">
        <div className="feedback feedback--error">
            <h3 className="feedback__title feedback__title--error">
                An error occurred!
            </h3>
            <a href="#contact" className="feedback__text feedback__text--error">
                Please try again
            </a>
        </div>
    </Modal>
);