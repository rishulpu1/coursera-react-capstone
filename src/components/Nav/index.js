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
                <li><Link to="/" onClick={()=> setMenuActive(false)}>Home</Link></li>
                <li><Link to="/about" onClick={()=> setMenuActive(false)}>About</Link></li>
                <li><Link to="/menu" onClick={()=> setMenuActive(false)}>Menu</Link></li>
                <li><Link to="/booking" onClick={()=> setMenuActive(false)}>Reserve Table</Link></li>
                <li><a href="#" onClick={()=> setMenuActive(false)}>Order Online</a></li>
                <li><a href="#" onClick={()=> setMenuActive(false)}>Log In</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;