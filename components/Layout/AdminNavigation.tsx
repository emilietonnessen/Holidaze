import { NextRouter, useRouter } from "next/router";
import { Button } from "../UI/Button";

const AdminNavigation: React.FC = () => {

    const router: NextRouter = useRouter();

    const logoutHandler = () => {
        localStorage.clear();
        router.push("/login");
    }

    return (
        <nav className="navigation admin-navigation">
            <Button theme="dark-grey" size="sm" onClick={logoutHandler}>
                logout
            </Button>
        </nav>
    );
}

export default AdminNavigation;