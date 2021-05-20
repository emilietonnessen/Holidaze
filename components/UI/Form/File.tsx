import { FileProps } from '../../../constants/interfaces';

const File: React.FC<FileProps> = ({ name, label, fileError, cssClass, onChange, register, added }) => {

    let cssError = '';

    if (fileError === undefined) {
        cssError = ''
    } else {
        cssError = 'form__file--error';
    }

    return (
        <div className={"form__group " + cssClass}>
            <label htmlFor={name} className="form__label">
                {label}
            </label>

            <label className={"form__file-upload " + cssError}>
                <input 
                    type="file" 
                    name={name} 
                    id={name} 
                    onChange={onChange} 
                    ref={register} />
                    upload image
            </label>
                {added ? <span className="form__file-chosen">{added}</span> : null}

            {fileError}
        </div>
    );
}

export default File;