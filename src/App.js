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
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
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
