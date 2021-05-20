import { MainProps } from "../../constants/interfaces";

const Main: React.FC<MainProps> = ({children, page}) => (
    <main className={'main ' + page} id="main">
        {children}
    </main>
);


export default Main;