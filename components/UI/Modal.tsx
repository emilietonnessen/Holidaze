interface ModalProps {
    children: React.ReactNode;
    link: string;
    id: string;
    classes: string;
}

const Modal: React.FC<ModalProps> = ( {children, link, id, classes} ) => {
    return (
        <div className={`modal ${classes}`} id={id}>
            <div className="modal__content">
                <a href={link} className="modal__close">&times;</a>
                {children}
            </div>
        </div>
    );
}

export default Modal;


interface ModalSuccessProps {
    link: string;
}

export const ModalSuccess: React.FC<ModalSuccessProps> = ({link}) => {
    return (
        <Modal link={link} id="modal-success" classes="modal-success">
            Success
        </Modal>
    );
}

interface ModalErrorProps {
    link: string;
    errorMessage: string;
    errorTitle: string;
}


export const ModalError: React.FC<ModalErrorProps> = ({ link, errorMessage, errorTitle }) => {
    return (
        <Modal link={link} id="modal-error" classes="modal-error">
            <h3 className="modal-error__title">
                {errorTitle}
            </h3>
            <p className="modal-error__message">
                {errorMessage}
            </p>
        </Modal>
    );
}