import AdminNavigation from './AdminNavigation';
import Main from './Main';
import NextHead from './NextHead';

interface AdminLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
    page: string;
}

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