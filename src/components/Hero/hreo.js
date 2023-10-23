import Container from "../Container";
import Button from "../Button/button";
const Hero = (props) => {
    return(
        <div className="bg-[#495E57] py-8 w-full">
            <Container>
                <div className="relative flex flex-col px-4 md:px-0 md:flex-row items-center">
                    {/* Banner Left Side */}
                    <div className="banner-left w-full md:w-1/2">
                        <h1 className="text-4xl font-medium text-[#F4CE14] md:text-7xl">{props.HeroTitle}</h1>
                        <h2 className="text-2xl md:text-4xl text-white font-normal">{props.heroSubTitle}</h2>
                        <p className="text-white">{props.heroDesc}</p>
                        <Button link="/">Reserve a Table</Button>
                        
                    </div>

                    {/* Banner Right Side */}
                    <div className={`banner-right w-full md:w-1/2 text-right`}>
                        <img src={props.heroImg} className={`inline-block ${props.imgClassName}`} alt={props.heroImgAlt} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;