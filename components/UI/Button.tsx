import Link from "next/link"

interface ButtonProps {
    link: string;
    children: React.ReactNode;
    theme: 'primary' | 'secondary';
    size: string;
}

const Button: React.FC<ButtonProps> = ({link, children, theme, size}) => {
    return (
        <button className={'btn ' + `btn--${theme} `}>
            <Link href={link}>
                <a className={`btn--${size}`}>
                    {children}
                </a>
            </Link>
        </button>
    );
}

export default Button;


interface ModalButtonProps {
    children: React.ReactNode;
    theme: 'primary' | 'light-grey' | 'dark-grey' | 'danger';
    size: 'cta' | 'lg' | 'md' | 'sm';
    type?: "button" | "submit" | "reset" | undefined;
    name: string;
}

export const ModalButton: React.FC<ModalButtonProps> = ({children, theme, size, type, name}) => {
    return (
        <button className={'btn ' + `btn--${theme}`} type={type}>
            <a href={`#${name}`} className={`btn--${size}`} data-target="#modal-booking">
                {children}
            </a>
        </button>
    );
}


interface SubmitButtonProps {
    children: React.ReactNode;
    theme: 'primary' | 'secondary';
    size: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({children, theme, size}) => {
    return (
        <button className={'btn ' + `btn--${theme} ` + `btn--${size}`} type="submit">
            {children}
        </button>
    );
}


interface SimpleButtonProps {
    children: React.ReactNode;
    theme: 'primary' | 'light-grey' | 'dark-grey' | 'danger';
    size: 'cta' | 'lg' | 'md' | 'sm';
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({children, theme, size, type, onClick}) => {
    return (
        <button className={'btn ' + `btn--${theme} ` + `btn--${size}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}