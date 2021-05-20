import * as icons from '../Icons';
import * as color from '../../../constants/colors';
import { ErrorProps } from '../../../constants/interfaces';

const Error: React.FC<ErrorProps> = ({ children }) => (
    <div className="form__error">
        <icons.Error color={color.error} classes="form__error-icon" /> {children}
    </div>
);

export default Error;