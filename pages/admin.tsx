import { NextRouter, useRouter } from "next/router";
import { useContext, useEffect } from "react";

import AdminDashboard from "../components/AdminDashboard";
import { AdminLayout } from "../components/Layout";
import AuthContext from "../context/AuthContext";
import { META_ADMIN, TITLE_ADMIN } from "../constants/meta";


const admin: React.FC = () => {

    // State
    const [auth]: any = useContext(AuthContext);
    const router: NextRouter = useRouter();


    // Redirect the user if the user is not authenticated or if there is no auth in the local storage
    useEffect(() => {
        if(!auth) {
            router.push("/login");
            localStorage.clear();
        } 

        try {
            if (auth.user.role.type !== "authenticated") {
                router.push("/login");
                localStorage.clear();
            }
        } catch (error) {
            router.push("/login");
            localStorage.clear();
        }
    }, []);


    return (
        <AdminLayout title={TITLE_ADMIN} description={META_ADMIN} page="admin">
            <AdminDashboard />
        </AdminLayout>
    );
}

export default admin;