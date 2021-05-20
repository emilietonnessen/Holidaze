import { useState } from "react";
import { AccordionProps } from "../../constants/interfaces";
import { Chevron } from "../UI/Icons";


const Accordion: React.FC<AccordionProps> = ({ title, children, closed }) => {
    const [isActive, setActive] = useState(false);

    const toggleOpenCloseHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className="accordion">
            <div className="accordion__header" onClick={toggleOpenCloseHandler}>
                <h2 className="accordion__title">
                    {title}
                </h2>
                <button className={closed ? !isActive ? "accordion__button" : "accordion__button accordion__button--open" : !isActive ? "accordion__button accordion__button--open" : "accordion__button " }>
                    <Chevron color="#141414" />
                </button>
            </div>

            <div className={closed ? !isActive ? "accordion__body accordion__close"  :"accordion__body accordion__open" : !isActive ? "accordion__body accordion__open" : "accordion__body accordion__close" }>
                {children}
            </div>
        </div>
    )
}

export default Accordion
