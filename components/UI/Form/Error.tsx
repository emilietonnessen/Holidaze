import * as icons from '../Icons';
import * as color from '../../../constants/colors';

interface ErrorProps {
    children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
    <div className="form__error">
        <icons.Error color={color.error} classes="form__error-icon" /> {children}
    </div>
);

export default Error;