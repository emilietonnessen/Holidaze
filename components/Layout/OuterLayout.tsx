import { AuthProvider } from '../../context/AuthContext';
import NextHead from './NextHead';

interface OuterLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const OuterLayout: React.FC<OuterLayoutProps> = ({ title, description, children }) =>  (
    <>
        <NextHead title={title} description={description} />
        {children}
    </>
);

export default OuterLayout;