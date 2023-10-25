import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Container from './components/Container';
import About from './pages/About/about'; 
import logo from "./assets/logo.svg";
import Booking from './components/Booking';
function App() {
  return (
    <>
      <Header className="py-4 relative px-4 md-px-0">
        <Container className="flex items-center justify-between">
          <div className='logo-cont'>
            <img src={logo} alt='Little Lemon Logo' />
          </div>
          <Nav />
        </Container>
      </Header>
      <Routes>
        <Route path='/' element= { <Home />} />
        <Route path='/about' element= { <About /> } />
        <Route path='/booking' element= { <Booking /> } />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
