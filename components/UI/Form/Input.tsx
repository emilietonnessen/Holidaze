import { InputProps } from '../../../constants/interfaces';

const Input: React.FC<InputProps> = ({name, label, type, placeholder, register, error, defaultValue, cssClass}) => {
    let cssError = '';

    if (error === undefined) {
        cssError = ''
    } else {
        cssError = 'form__input--error';
    }

    return (
        <div className={"form__group " + cssClass}>
            <label 
                htmlFor={name} 
                className="form__label" >
                {label}
            </label>

            <input 
                autoComplete="nope"
                ref={register}
                name={name} 
                type={type} 
                className={"form__input " + cssError}
                id={name}
                placeholder={placeholder}
                defaultValue={defaultValue} />
                
            {error}
        </div>
    )
};


export default Input;