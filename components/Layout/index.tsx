import { Provider } from "react-redux";

import Footer from "./Footer"
import Main from "./Main"
import Navigation from "./Navigation"
import NextHead from "./NextHead";
import { store } from '../../store/redux';
import { LayoutProps } from "../../constants/interfaces";



const Layout: React.FC<LayoutProps> = ({children, page, title, description }) =>  (
    <Provider store={store}>

        <NextHead title={title} description={description} />

        <div className="layout">
            <div className="wrapper">
                <Navigation active={page}/>
                        
                <Main page={page}>{children}</Main>
            </div>
                    
            <Footer />
        </div>
            
    </Provider>
);

export default Layout;