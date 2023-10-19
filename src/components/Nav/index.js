import { useState } from "react";
import classes from "./nav.module.css";
const Nav = () => {
    const [menuActive, setMenuActive] = useState(false);

    const mobNavHandler = () => {
        setMenuActive(!menuActive);
    }
    return(
        <>
        <div className={`${classes.mobNav}`} onClick={mobNavHandler}><span></span><span></span><span></span></div>
        <nav className={`${classes.mainNav} ${menuActive ? classes.showMenu: ''}`}>
            <ul className={``}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reserve Table</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;