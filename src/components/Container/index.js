import classes from "./container.module.css";
const Container = ({children, className}) => {
    return(
        <div className={`${classes.container} ${className}`}>
            {children}
        </div>
    );
}

export default Container;