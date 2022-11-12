import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/landingpage' element={<LandingPage />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
