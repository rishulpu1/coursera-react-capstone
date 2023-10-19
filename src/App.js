import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Container from './components/Container';
import logo from "./assets/logo.svg";
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
      <Main />
      <Footer />
    </>
  );
}

export default App;
