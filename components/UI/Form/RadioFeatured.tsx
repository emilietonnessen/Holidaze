import { RadioProps } from '../../../constants/interfaces';

const RadioFeatured: React.FC<RadioProps> = ({name, label, register, error, cssClass, defaultValue}) => {


    let cssError = '';
    let trueChecked = false;
    let falseChecked = false;

    if (error === undefined) {
        cssError = ''
    } else {
        cssError = 'form__radio--error';
    }

    if (defaultValue === true) {trueChecked = true;} 
    if (defaultValue === false) {falseChecked = true;}

    const trueChangeHandler = () => {
        if (trueChecked === true) trueChecked = false;
        if (falseChecked === true) trueChecked = false;
        if (trueChecked === false) trueChecked = true;
        if (falseChecked === false) trueChecked = true;
    }

     const falseChangeHandler = () => {
        if (trueChecked === true) trueChecked = false;
        if (falseChecked === true) trueChecked = false;
        if (trueChecked === false) trueChecked = true;
        if (falseChecked === false) trueChecked = true;
    }

    return (
        <div className={"form__group " + cssClass}>

            {/* Form Label: */}
            <label className="form__label">{label}</label>

                {/* True: */}
                <input 
                    ref={register} 
                    name={name} 
                    onChange={trueChangeHandler}
                    type="radio" 
                    id="radio-true" 
                    className="form__radio "
                    checked={trueChecked}
                    value="true" />
                <label htmlFor="radio-true" className="form__radio-label">Yes</label>
                    
                {/* False: */}
                <input 
                    ref={register} 
                    name={name} 
                    onChange={falseChangeHandler}
                    type="radio" 
                    id="radio-false" 
                    className="form__radio "
                    checked={falseChecked}
                    value="false" />
                <label htmlFor="radio-false" className="form__radio-label">No</label>

            {/* Error: */}
            {error}
        </div>
    );
}

export default RadioFeatured;