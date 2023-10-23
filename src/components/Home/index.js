import Container from "../Container";
import Hero from "../Hero/hreo";
import heroImg from "../../assets/restauranfood.jpg";
const Home = () => {
    return(
        <main>
            <Hero 
                HeroTitle = "Little Lemon"
                heroSubTitle = "Chicago"
                heroDesc = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor i`}
                heroImg = {heroImg}
                imgClassName = "relative mt-8 md:mt-0 md:top-16 rounded-[16px] md:h-[550px]"
                heroImgAlt = "Little Lemon Image"
            />
            <Container>
                <h2>Main Section</h2>
            </Container>
        </main>
        
    );
}

export default Home;