import { Link } from "react-router-dom";
const Button = (props) => {
    return(
        <Link to={props.link} className="bg-[#F4CE14] text-[#333] rounded-[16px] px-6 py-2 inline-block mt-4 font-medium text-xl">{props.children}</Link>
    );
}

export default Button;