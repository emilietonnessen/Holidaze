import NextHead from './Head';
import { OuterLayoutProps } from '../../constants/interfaces';


const OuterLayout: React.FC<OuterLayoutProps> = ({ title, description, children }) =>  (
    <>
        <NextHead title={title} description={description} />
        {children}
    </>
);

export default OuterLayout;