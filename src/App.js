import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CreatePoll from './components/CreatePoll';
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
function App() {
    const location = useLocation();
    const hasNavbar = ['/'];
  return (
    <div className="App">
        <>
            {!hasNavbar.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/create-poll' element={<CreatePoll />}/>
            </Routes>
        </>
    </div>
  );
}

export default App;
