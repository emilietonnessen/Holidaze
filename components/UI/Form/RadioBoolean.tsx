import { useState } from 'react';
import { RadioProps } from '../../../constants/interfaces';

const RadioBoolean: React.FC<RadioProps> = ({name, label, register, error, cssClass, defaultValue, radioID}) => {

    let cssError: string = '';

    if (error === undefined) {cssError = '';} 
    else {cssError = 'form__radio-group--error';}  

    // defaultValue should either return as boolean value or 'undefined'. If the value returns undefined, none shall be checked. 
    // If defaultValue returns true - then trueIsChecked should be true, and falseIsChecked should be false
    // If defaultValue returns false - then trueIsCheck should be false, and falseIsChecked should be true

    // Setting the state whether they are checked or not based on the default value
    const [trueIsChecked, setTrueIsChecked] = useState<boolean>(defaultValue === true ? true : false); 
    const [falseIsChecked, setFalseIsChecked] = useState<boolean>(defaultValue === false ? true : false); 

    const trueChangeHandler = () => {      
        setTrueIsChecked(true);
        setFalseIsChecked(false);
        defaultValue = true;
    }

    const falseChangeHandler = () => {  
        setTrueIsChecked(false);
        setFalseIsChecked(true);
        defaultValue = false;
    } 

    return (
        <div className={"form__group " + cssClass}>

            {/* Form Label: */}
            <label className="form__label">{label}</label>

                {/* True Option: */}
                <div className={"form__radio-group " + cssError} onClick={trueChangeHandler}>
                    <input 
                        ref={register} 
                        name={name} 
                        onChange={trueChangeHandler}
                        type="radio" 
                        id={"radio-true-" + radioID} 
                        className="form__radio-input "
                        checked={defaultValue ? true : trueIsChecked}
                        value="true" />
                    <label htmlFor={"radio-true-" + radioID}  className="form__radio-label" onClick={trueChangeHandler} >
                        <button className="form__radio-button"></button>
                        Yes
                    </label>
                </div>

               {/* False Option: */}
               <div className={"form__radio-group " + cssError}  onClick={falseChangeHandler} >
                    <input 
                        ref={register} 
                        name={name} 
                        onChange={falseChangeHandler}
                        type="radio" 
                        id={"radio-false-" + radioID} 
                        className="form__radio-input "
                        checked={defaultValue === false ? true : falseIsChecked}
                        value="false" />
                    <label htmlFor={"radio-false-" + radioID} className="form__radio-label"   onClick={falseChangeHandler}>
                        <button className="form__radio-button"></button>
                        No
                        </label>
               </div>
                    
            {/* Error Message: */}
            {error}
        </div>
    );
}

export default RadioBoolean;