import { Provider } from "react-redux";

import Footer from "./Footer"
import Main from "./Main"
import Navigation from "./Navigation"
import Head from "./Head";
import { LayoutProps, AdminLayoutProps } from "../../constants/interfaces";
import { AdminNavigation } from './Navigation';



// Visitors Side Layout ----------------------------------------------------
const Layout: React.FC<LayoutProps> = ({children, page, title, description }) =>  (
    <>
        {/* <head> - SEO */}
        <Head title={title} description={description} />

        {/* <body> - page content */}
        <div className="layout">
            <div className="wrapper">
                <Navigation active={page}/>
                        
                <Main page={page}>{children}</Main>
            </div>
                    
            <Footer />
        </div>
    </>
);

export default Layout;



// Admin Side Layout --------------------------------------------------------
export const AdminLayout: React.FC<AdminLayoutProps> = ({ title, description, children, page }) => (
    <>
        {/* <head> - SEO */}
        <Head title={title} description={description}/>
        
        {/* <body> - page content */}
        <div className="layout layout--admin">
            <div className="wrapper">
                <AdminNavigation />
                        
                <Main page={page}>{children}</Main>
            </div>
        </div>
    </>
);