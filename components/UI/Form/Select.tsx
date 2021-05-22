import { useState } from "react";

import { Chevron } from '../Icons';
import { SelectProps } from "../../../constants/interfaces";

const Select: React.FC<SelectProps> = ({ name, children, label, register, error, onChange, defaultValue, cssClass }) => {
    const [value, setValue] = useState<string>(defaultValue)
    let cssError = '';

    if (error === undefined) {cssError = ''
    } else { cssError = 'form__select--error' }

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setValue(event.target.value);

    return (
        <div className={`form__group  ` + cssClass}>
            <label htmlFor={name} className="form__label">{label}</label>

            <div className="form__select-box">
                <select 
                    onChange={onChange ? onChange: onChangeHandler}
                    name={name} 
                    id={name} 
                    className={"form__select " + cssError }
                    placeholder="Choose a Room" 
                    ref={register}
                    value={value ? value : defaultValue} >
                    
                    <option value="" hidden></option>
                    {children}
                </select>

                <Chevron classes="form__select-icon" />
            </div>

            {error}
        </div>
    );
}

export default Select;