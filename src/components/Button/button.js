const Button = (props) => {
    return(
        <a href={props.link} className="bg-[#F4CE14] text-[#333] rounded-[16px] px-6 py-2 inline-block mt-4 font-medium text-xl">{props.children}</a>
    );
}

export default Button;