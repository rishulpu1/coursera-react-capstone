import logo from "../../assets/logo.svg";
import Container from "../Container";
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <footer className="footer px-4 py-6 md:px-0">
            <Container>
                <div className="flex-col md:flex md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                        <img src={logo} alt="Logo" />
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam unde, quia hic possimus illum accusantium beatae quaerat? Vitae dicta officia iste dolor cumque facere alias quam impedit delectus doloremque.</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4>Quick Links</h4>
                        <div className="footer-nav">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Reserve Table</a></li>
                                <li><a href="#">Order Online</a></li>
                                <li><a href="#">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4>Contact</h4>
                        <p>Address:<br/> 123 Street, India</p>
                        <p>Phone:<br/> 0336548324</p>
                        <p>Email:<br/> info@littlelemon.com</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4>Social Media</h4>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Linkedin</a></li>
                                <li><a href="#">Twitter</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
        
    );
}

export default Footer;