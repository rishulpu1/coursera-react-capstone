import { useState } from "react";
import { Link } from "react-router-dom";
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
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