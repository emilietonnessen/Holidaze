import { primary } from "../../constants/colors";
import { ModalProps } from "../../constants/interfaces";
import { Cross } from './Icons';

const Modal: React.FC<ModalProps> = ( {children, link, id, classes} ) => {
    return (
        <div className={`modal ${classes}`} id={id}>
            <div className="modal__content">
                <a href={link} className="modal__close">{/* &times; */}<Cross color={primary} /> </a>
                {children}
            </div>
        </div>
    );
}

export default Modal;