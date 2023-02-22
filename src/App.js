import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About'

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;