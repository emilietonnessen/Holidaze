import { useEffect, useState } from "react";

interface SelectProps {
    name: string;
    children: React.ReactNode;
    label: string;
    register: () => void;
    error: any;
    onChange?: any;
    defaultValue?: any;
    cssClass?: string;
}
const Select: React.FC<SelectProps> = ({ name, children, label, register, error, onChange, defaultValue, cssClass }) => {

    //console.log(defaultValue);
    
    const [value, setValue] = useState<string>(defaultValue)
    
    let cssError = '';

    if (error === undefined) {
        cssError = ''
    } else {
        cssError = 'form__input--error';
    }

    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }

    console.log("[value]", value);

    return (
        <div className={`form__group  ` + cssClass}>
            <label htmlFor={name} className="form__label">{label}</label>

            <select 
                onChange={onChange ? onChange: onChangeHandler}
                name={name} 
                id={name} 
                className={"form__input " + cssError }
                placeholder="Choose a Room" 
                ref={register}
                value={value ? value : defaultValue} >
                
                <option value="" hidden></option>
                {children}
            </select>

            {error}
        </div>
    )
};


export default Select;