import { ModalProps } from "../../constants/interfaces";


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