import { useState } from 'react';
import { RadioProps } from '../../../constants/interfaces';

const RadioBoolean: React.FC<RadioProps> = ({name, label, register, error, cssClass, defaultValue}) => {
    let cssError: string = '';

    if (error === undefined) {
        cssError = '';
    } else {
        cssError = 'form__radio--error';
    }

    // defaultValue should either return as boolean value or 'undefined'. If the value returns undefined, none shall be checked. 
    // If defaultValue returns true - then trueIsChecked should be true, and falseIsChecked should be false
    // If defaultValue returns false - then trueIsCheck should be false, and falseIsChecked should be true

    // Setting the state whether they are checked or not based on the default value
    const [trueIsChecked, setTrueIsChecked] = useState<boolean>(defaultValue === true ? true : false); 
    const [falseIsChecked, setFalseIsChecked] = useState<boolean>(defaultValue === false ? true : false); 

    const trueChangeHandler = () => {      
        setTrueIsChecked(true);
        setFalseIsChecked(false);
    }

    const falseChangeHandler = () => {  
        setTrueIsChecked(false);
        setFalseIsChecked(true);
    }


    // Testing out with variables instead of state
    /* let trueIsChecked: boolean = false;
    let falseIsChecked: boolean = false; */


    /* if (defaultValue === false) {
        falseIsChecked = true;
        trueIsChecked = false;
    }  */

     /* if (defaultValue === null) {
        trueIsChecked = false;
        falseIsChecked = false;
    }  */

    /* const trueChangeHandler = () => {
        trueIsChecked = true;
        falseIsChecked = false; 
    } */

    /* const falseChangeHandler = () => {
        falseIsChecked = true;
        trueIsChecked = false; 
        //console.log("NO");
    } */

    

    // Console Logs and checks
    console.log("[Radio: Default Value]", defaultValue);
    //console.log("[True is Checked]", trueIsChecked);
    //console.log("[False is Checked]", falseIsChecked);

    if (trueIsChecked) console.log("'Yes' is checked")
    if (falseIsChecked) console.log("'No' is checked");
    if (trueIsChecked === false && falseIsChecked === false) console.log("none is checked!");

    if (defaultValue === true) console.log("default value is true!");
    if (defaultValue === false) console.log("default value is false!");
    if (defaultValue === undefined) console.log("default value is undefined!");

    

    return (
        <div className={"form__group " + cssClass}>

            {/* Form Label: */}
            <label className="form__label">{label}</label>

                {/* True Option: */}
                <div className="form__radio-group" onClick={trueChangeHandler}>
                    <input 
                        ref={register} 
                        name={name} 
                        onChange={trueChangeHandler}
                        type="radio" 
                        id="radio-true" 
                        className="form__radio "
                        checked={trueIsChecked}
                        value="true" />
                    <label htmlFor="radio-true" className="form__radio-label" onClick={trueChangeHandler}>Yes</label>
                </div>

               {/* False Option: */}
               <div className="form__radio-group" onClick={falseChangeHandler}>
                    <input 
                        ref={register} 
                        name={name} 
                        onChange={falseChangeHandler}
                        type="radio" 
                        id="radio-false" 
                        className="form__radio "
                        checked={falseIsChecked}
                        value="false" />
                    <label htmlFor="radio-false" className="form__radio-label" onClick={falseChangeHandler}>No</label>
               </div>
                    
            {/* Error Message: */}
            {error}
        </div>
    );
}

export default RadioBoolean;