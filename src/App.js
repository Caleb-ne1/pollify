import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CreatePoll from './components/CreatePoll';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/create-poll' element={<CreatePoll />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
