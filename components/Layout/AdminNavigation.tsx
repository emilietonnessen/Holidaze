import { NextRouter, useRouter } from "next/router";

const AdminNavigation: React.FC = () => {

    const router: NextRouter = useRouter();

    const logoutHandler = () => {
        localStorage.clear();
        router.push("/login");
    }

    return (
        <div className="navigation admin-navigation">
            <button className="btn btn--dark-grey btn--sm" onClick={logoutHandler}>
                logout
            </button>
        </div>
    );
}

export default AdminNavigation;