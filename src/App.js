import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted'
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
        <Route path='/howitworks' element={<HowItWorks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
