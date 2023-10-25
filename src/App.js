import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Container from './components/Container';
import About from './pages/About/about'; 
import logo from "./assets/logo.svg";
import Booking from './components/Booking';
import { useReducer } from 'react';
function App() {

  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) /m
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate())
    for(let i = 17; i <= 23; i++){
      if(random() < 0.5){
        result.push(i + ":00");
      }
      if(random() > 0.5){
        result.push(i + ":30");
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }
  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())};
  }

  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }
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
        <Route path='/booking' element= { <Booking availableTimes={state} dispatch = {dispatch} submitForm = {submitForm} /> } />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
