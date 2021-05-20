import AdminNavigation from './AdminNavigation';
import Main from './Main';
import NextHead from './NextHead';
import { AdminLayoutProps } from '../../constants/interfaces';



const AdminLayout: React.FC<AdminLayoutProps> = ({ title, description, children, page }) => (
    <>
        <NextHead title={title} description={description}/>
        
        <div className="layout layout--admin">
            <div className="wrapper">
                <AdminNavigation />
                        
                <Main page={page}>{children}</Main>
            </div>
        </div>
    </>
)

export default AdminLayout;