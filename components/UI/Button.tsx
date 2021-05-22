import Link from "next/link"
import { ButtonLinkProps, ButtonProps } from "../../constants/interfaces";




// Standard Button ---------------------------------------------
export const Button: React.FC<ButtonProps> = ({children, theme, size, type, onClick, classes}) => (
    <button className={`btn btn--${theme} btn--${size} ${classes}`} type={type} onClick={onClick}>
        {children}
    </button>
);





// Button Link --------------------------------------------------
export const ButtonLink: React.FC<ButtonLinkProps> = ({link, children, theme, size}) => (
    <button className="button">
        <Link href={link}>
            <a className={'btn ' + `btn--${theme} btn--${size}`}>
                {children}
            </a>
        </Link>
    </button>
);





// Button Modal ---------------------------------------------------
export const ButtonModal: React.FC<ButtonProps> = ({children, theme, size, type, name}) => {
    return (
        <button className="button" type={type}>
            <a href={`#${name}`} className={`btn btn--${theme} btn--${size}`} data-target="#modal-booking">
                {children}
            </a>
        </button>
    );
}