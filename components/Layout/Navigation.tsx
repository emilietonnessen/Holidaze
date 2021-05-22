import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from "next/router";

import Search from '../UI/Search';
import { NavigationProps } from '../../constants/interfaces';
import { Button } from "../UI/Button";


const Navigation: React.FC<NavigationProps> = ({active}) => (
    <nav className="navigation">

        {/* Brand/Logo */}
        <div className="logo">
            <Link href="/">
                <a>
                    <Image src="/assets/logo.svg" alt="logo" width="54.18" height="50" />
                    <h1>Holidaze</h1>
                </a>
            </Link>
        </div>


        {/* Search */}
        {active === "home" ? <div></div> : <Search theme="grey" />  }

            
        {/* Hamburger Icon */}
        <input type="checkbox" className="menu__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="menu__button"><span className="menu__icon">&nbsp;</span></label>
        <div className="menu__background">&nbsp;</div>


        {/* Menu */}
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item menu__item--home">
                    <Link href="/">
                        <a className={active.toLowerCase() == 'home' ? "menu__link active menu__link--home" : "menu__link menu__link--home"}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/establishments">
                        <a className={active.toLowerCase() == 'establishments' && 'establishment' ? "menu__link active" : "menu__link"}>
                            Establishments
                        </a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/contact">
                        <a className={active.toLowerCase() == 'contact' ? "menu__link active" : "menu__link"}>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul> 
        </nav>
             
    </nav>
);

export default Navigation;



// Admin Navigation ---------------------------------------------
export const AdminNavigation: React.FC = () => {

    // Variables
    const router: NextRouter = useRouter();


    // Logout Handler
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